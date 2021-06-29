import { styled } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import { css } from '@emotion/react';

export const DashboardSearchInput = styled(InputBase)`
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
