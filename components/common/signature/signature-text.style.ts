import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SignatureText = styled.p`
  ${({ theme }) => css`
    color: #cfcfcf;
    font-weight: 900;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.07rem;
    word-spacing: 0.5rem;

    ${theme.breakpoints.down('xs')} {
      font-size: 1.2rem;
    }
  `}
`;
