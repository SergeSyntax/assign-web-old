import React from 'react';
import { FooterSignatureText } from './footer-signature-text';
import { FooterSignatureWrapper } from './footer-signature-wrapper.style';

export const FooterSignature: React.FC = () => {
  return (
    <FooterSignatureWrapper>
      <FooterSignatureText />
    </FooterSignatureWrapper>
  );
};
