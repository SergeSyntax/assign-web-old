import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LandingHeaderButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    ${theme.breakpoints.down('xs')} {
      flex-direction: column;
    }
  `}
`;
