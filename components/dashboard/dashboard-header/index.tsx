import React from 'react';

import { HeaderDashboardWrapper } from './header-dashboard-wrapper.style';
import { DashboardLogo } from './dashboard-logo.style';
import { DashboardNav } from './dashboard-nav';
import { DashboardHeaderToolbar } from './dashboard-header-toolbar.style';
import { UserOptions } from './UserOptions';
import { InputBase, Paper } from '@material-ui/core';
import { FiSearch } from 'react-icons/fi';
import styled from '@emotion/styled';
import { grey } from '@material-ui/core/colors';
import { Create } from './create';
import { css } from '@emotion/react';

const DashboardSearchLayout = styled(Paper)`
  background-color: ${grey['200']};
  border-radius: 10rem;
  box-shadow: unset;
  margin-left: 1rem;
  padding: 0.4rem 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${grey[600]};
  svg {
    font-size: 1.3em;
  }

  ${({ theme }) => css`
    ${theme.breakpoints.down('sm')} {
      cursor: pointer;
      padding: 1rem;
      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;

const DashboardSearchInput = styled(InputBase)`
  margin-left: 1rem;
  width: 18rem;
  font-size: inherit;
  padding: unset;
  color: black;
  /* font-weight: bold; */
  letter-spacing: 0.05rem;
  ${({ theme }) => css`
    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  `}
`;

export const DashboardHeader: React.FC = () => {
  return (
    <HeaderDashboardWrapper position="static" variant="outlined" color="default">
      {' '}
      <DashboardHeaderToolbar>
        <DashboardLogo />
        <DashboardSearchLayout component="form">
          <FiSearch />
          <DashboardSearchInput
            placeholder="Search Content"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </DashboardSearchLayout>
        <DashboardNav />
        <Create />
        <UserOptions />
      </DashboardHeaderToolbar>
    </HeaderDashboardWrapper>
  );
};
