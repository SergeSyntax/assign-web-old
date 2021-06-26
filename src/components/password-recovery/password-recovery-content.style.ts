import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const PasswordRecoveryContent = styled('div')`
  && {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #718096;
    margin-bottom: 1rem;
    ${({ theme }) => css`
      ${theme.breakpoints.down('xs')} {
        max-width: 20rem;
      }
    `}
  }
`;
