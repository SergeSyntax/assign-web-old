import React from 'react';
import { FooterMenuItemLink } from './footer-menu-item-link.style';
import { FooterMenuItemWrapper } from './footer-menu-item-wrapper.style';
import Link from 'next/link';

interface Props {
  title: string;
  path: string;
}

export const FooterMenuItem: React.FC<Props> = ({ title, path }) => {
  return (
    <FooterMenuItemWrapper key={title}>
      <Link passHref href={path}>
        <FooterMenuItemLink>{title} </FooterMenuItemLink>
      </Link>
    </FooterMenuItemWrapper>
  );
};
