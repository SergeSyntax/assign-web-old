import { Container, styled } from '@material-ui/core';

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

HeaderContainer.defaultProps = { maxWidth: 'lg' };

export default HeaderContainer;
