import React from 'react';

import { Logo } from 'components/common/logo';
import { Menu } from './footer-menu-list';
import { FooterMenuWrapper } from './footer-menu-wrapper';

export const FooterMenu: React.FC = () => {
  return (
    <FooterMenuWrapper>
      <Logo />
      <Menu />
    </FooterMenuWrapper>
  );
};
