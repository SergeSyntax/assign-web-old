import { styled } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { css } from '@emotion/react';

export const DashboardSearchForm = styled('form')`
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
