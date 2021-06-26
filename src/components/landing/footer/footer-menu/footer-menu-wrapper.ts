import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const FooterMenuWrapper = styled('footer')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    background-color: #1e1e1e;
    color: #fff;
    align-items: center;
    font-size: 1.4rem;
    padding: 3rem;

    :hover {
      color: #a8a8a8;
    }

    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
    }
  `}
`;
