import styled from '@emotion/styled';
import { Tab } from '@material-ui/core';

export const DashboardNavItem = styled(Tab)`
  font-size: 1.1rem;
  min-width: 10rem;
  min-height: unset;
  line-height: 1.5;
  padding-top: 0.6rem;
  &.MuiButtonBase-root > .MuiTab-wrapper > svg {
    font-size: 2.6rem;
  }
`;
