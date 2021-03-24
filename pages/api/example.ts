// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler } from 'next';

const handler: NextApiHandler<{ name: string }> = (req, res) => {
  console.log(req);

  res.status(200).json({ name: 'John Doe' });
};

export default handler;
