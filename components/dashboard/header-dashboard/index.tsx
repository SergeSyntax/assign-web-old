import styled from '@emotion/styled';
import { Avatar, Button } from '@material-ui/core';
import React from 'react';

import { HeaderDashboardWrapper } from './header-dashboard-wrapper.style';
import { LogoHeaderDashboard } from './logo-header-dashboard.style';
import { NavHeaderDashboard } from './nav-header-dashboard';
import { ToolbarHeaderDashboard } from './toolbar-header-dashboard.style';

const UserIcon = styled(Avatar)`
  color: #626262;
  background-color: #f0efef;
  font-size: 1.6rem;
`;

export const AppBarDashboard: React.FC = () => {
  return (
    <HeaderDashboardWrapper position="static" variant="outlined" color="default">
      {' '}
      <ToolbarHeaderDashboard>
        <LogoHeaderDashboard />
        <NavHeaderDashboard />
        <Button>
          <UserIcon>SK</UserIcon>
          {/* <Typography className={classes.userName}>{name}</Typography> */}
        </Button>
      </ToolbarHeaderDashboard>
    </HeaderDashboardWrapper>
  );
};
