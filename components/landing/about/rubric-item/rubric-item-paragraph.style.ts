import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RubricParagraph = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    line-height: 1.7;
    font-weight: 400;
    ${theme.breakpoints.down('md')} {
      font-size: 1.4rem;
    }
    ${theme.breakpoints.down('sm')} {
      max-width: 40rem;
    }
  `}
`;
