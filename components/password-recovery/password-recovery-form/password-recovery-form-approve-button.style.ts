import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

export const PasswordRecoveryApproveButton = styled(Button)`
  && {
    flex: 1;
    background: #318bd3;
    padding: 1rem;
    ${({ theme }) => css`
      ${theme.breakpoints.down('xs')} {
        flex: 1;
        padding: 2rem;
      }
    `}
  }
`;
