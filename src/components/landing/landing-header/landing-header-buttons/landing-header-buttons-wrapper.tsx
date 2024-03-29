import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const LandingHeaderButtonsWrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    ${theme.breakpoints.down('xs')} {
      flex-direction: column;
    }
  `}
`;
