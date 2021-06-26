import React, { Fragment } from 'react';
import { FooterSignature } from './footer-signature';
import { FooterMenu } from './footer-menu';

export const Footer: React.FC = () => {
  return (
    <Fragment>
      <FooterMenu />
      <FooterSignature />
    </Fragment>
  );
};
