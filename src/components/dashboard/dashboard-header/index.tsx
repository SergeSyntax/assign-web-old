import React from 'react';

import { AppbarDashboard } from './appbar-dashboard.style';
import { Toolbar } from '@material-ui/core';

import { DashboardLogo } from './dashboard-logo.style';
import { DashboardNav } from './dashboard-nav';

import { Create } from './create';
import DashboardToolbarContainer from './container.style';
import DashboardSearch from './search';

export const DashboardHeader: React.FC = () => {
  return (
    <AppbarDashboard position="static" elevation={0} variant="outlined" color="default">
      <Toolbar>
        <DashboardToolbarContainer>
          <DashboardLogo />
          <DashboardSearch />

          <DashboardNav />

          <Create />
          {/* <UserOptions /> */}
        </DashboardToolbarContainer>
      </Toolbar>
    </AppbarDashboard>
  );
};
