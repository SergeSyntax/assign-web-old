import React, { Fragment } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { OpenAuthenticationGithub } from './open-auth-github.style';
import { OpenAuthenticationGoogle } from './open-auth-google.style';

export const OpenAuth: React.FC = () => {
  return (
    <Fragment>
      <OpenAuthenticationGithub startIcon={React.createElement(FaGithub)} type="button">
        continue with github
      </OpenAuthenticationGithub>
      <OpenAuthenticationGoogle startIcon={React.createElement(FaGoogle)} type="button">
        continue with google
      </OpenAuthenticationGoogle>
    </Fragment>
  );
};
