import React from 'react';
import { FooterMenuItem } from '../footer-menu-item';
import { FOOTER_MENU_LIST } from './footer-menu-list.constant';
import { FooterMenuListWrapper } from './footer-menu-list-wrapper.style';

export const Menu: React.FC = () => (
  <FooterMenuListWrapper>
    {FOOTER_MENU_LIST.map(item => (
      <FooterMenuItem key={item.title} {...item} />
    ))}
  </FooterMenuListWrapper>
);
