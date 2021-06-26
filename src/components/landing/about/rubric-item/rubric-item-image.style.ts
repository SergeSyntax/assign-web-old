import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const RubricImage = styled('img')`
  ${({ theme }) => css`
    display: none;
    width: 100%;
    max-width: 50rem;
    margin-bottom: 2rem;
    ${theme.breakpoints.down('sm')} {
      display: block;
      max-width: 30rem;
    }
  `}
`;
