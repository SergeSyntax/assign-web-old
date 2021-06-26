import React, { Fragment } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { OpenAuthGithub } from '../button/open-auth-github.style';
import { OpenAuthGoogle } from '../button/open-auth-google.style';

export const OpenAuth: React.FC = () => {
  return (
    <Fragment>
      <OpenAuthGithub
        startIcon={React.createElement(FaGithub)}
        type="button"
        text="continue with github"
        inProgress={false}
      />
      <OpenAuthGoogle
        startIcon={React.createElement(FaGoogle)}
        type="button"
        text="continue with google"
        inProgress={false}
      />
    </Fragment>
  );
};
