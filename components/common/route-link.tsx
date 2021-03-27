import Link from 'next/link';
import styled from '@emotion/styled';

import MaterialLink, { LinkProps } from '@material-ui/core/Link';

const MaterialLinkStyled = styled(MaterialLink)`
  white-space: nowrap;
  padding: 0 0.5rem;
  font-weight: bold;
`;

interface Props extends LinkProps {
  href: string;
}

const RouteLink = (props: React.PropsWithChildren<Props>): React.ReactElement => (
  <Link passHref {...props}>
    <MaterialLinkStyled {...props}>{props.children}</MaterialLinkStyled>
  </Link>
);

export default RouteLink;
