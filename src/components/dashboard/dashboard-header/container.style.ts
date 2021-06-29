import { Container, styled } from '@material-ui/core';

const DashboardToolbarContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

DashboardToolbarContainer.defaultProps = { maxWidth: 'lg' };

export default DashboardToolbarContainer;
