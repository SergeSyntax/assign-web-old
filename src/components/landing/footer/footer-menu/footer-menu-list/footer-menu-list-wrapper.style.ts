import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const FooterMenuListWrapper = styled('ul')`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    ${theme.breakpoints.down('sm')} {
      margin-top: 3rem;
    }

    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`;
