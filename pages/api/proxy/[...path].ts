import httpProxy from 'http-proxy';
import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

const API_URL = process.env.API_URL;

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const cookies = new Cookies(req, res);

  const authToken = cookies.get('auth-token');

  req.headers.cookie = '';
  if (authToken) {
    req.headers.authorization = authToken;
  }

  return new Promise((resolve, reject) => {
    req.url = req.url?.replace('api/proxy/', '');
    proxy.web(req, res, {
      target: API_URL,
      autoRewrite: false,
    });

    proxy.once('proxyRes', (proxyRes, req, res) => {
      const { authorization } = proxyRes.headers;
      const cookies = new Cookies(req, res);
      cookies.set('auth-token', authorization);
    });

    proxy.on('end', resolve);
    proxy.on('error', reject);
  });
};
