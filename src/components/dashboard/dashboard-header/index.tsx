import React from 'react';

import { HeaderDashboardWrapper } from './header-dashboard-wrapper.style';
import { Toolbar } from '@material-ui/core';

import { DashboardLogo } from './dashboard-logo.style';
import { DashboardNav } from './dashboard-nav';
import { UserOptions } from './UserOptions';
import { InputBase } from '@material-ui/core';
import { FiSearch } from 'react-icons/fi';
import { styled } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Create } from './create';
import { css } from '@emotion/react';
import HeaderContainer from '../header-container.style';

const DashboardSearchLayout = styled('form')`
  background-color: ${grey[200]};
  box-shadow: 0px 2px 5px rgba(64, 67, 60, 0.16);
  border-radius: 10rem;
  /* box-shadow: unset; */
  margin-left: 1rem;
  padding: 0.4rem 1rem;
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${grey[600]};
  svg {
    font-size: 1.2em;
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
  margin-right: 1rem;
  font-size: inherit;
  display: flex;
  flex: 1;
  color: inherit;

  input.MuiInputBase-input {
    font-size: 1.8rem;
    letter-spacing: 0.05rem;

    color: inherit;
    font-weight: 600;
  }

  /* font-weight: bold; */
  ${({ theme }) => css`
    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  `}
`;

export const DashboardHeader: React.FC = () => {
  return (
    <HeaderDashboardWrapper position="static" elevation={0} variant="outlined" color="default">
      <Toolbar>
        <HeaderContainer>
          <DashboardLogo />
          <DashboardSearchLayout>
            <FiSearch />
            <DashboardSearchInput
              placeholder="Search Content"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </DashboardSearchLayout>
          <DashboardNav />
          <Create />
          <UserOptions />
        </HeaderContainer>
      </Toolbar>
    </HeaderDashboardWrapper>
  );
};
