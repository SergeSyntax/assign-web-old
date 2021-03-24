import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

const AuthButton = styled(Button)`
  ${({ theme }) => css`
    background: #0073b1;
    height: 4.5rem;
    margin: 1rem 0;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.6rem;
    transition: all 0.2s;
    &:hover {
      background: #0073b1;
      box-shadow: ${theme.shadows[5]};
    }
  `}
`;

AuthButton.defaultProps = { fullWidth: true, color: 'primary', variant: 'contained' };

export default AuthButton;
