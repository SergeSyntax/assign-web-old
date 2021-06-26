import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

const PasswordRecoveryFormButtonWrapper = styled('div')`
  && {
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-top: 1rem;
    ${({ theme }) => css`
      ${theme.breakpoints.down('xs')} {
        flex-direction: column;
        align-items: stretch;
        margin: 1rem auto;
      }
    `}
  }
`;

export default PasswordRecoveryFormButtonWrapper;
