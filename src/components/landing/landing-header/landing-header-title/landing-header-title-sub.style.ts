import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import { moveInRight } from 'src/styles/animations/move-in-right.keyframe';

export const LandingHeaderTitleSub = styled('span')`
  ${({ theme }) => css`
    display: inline-block;
    letter-spacing: 1.05em;
    font-size: 0.45em;
    font-weight: 700;
    animation: ${moveInRight} 1s ease-out;
    margin-left: -0.5rem;

    ${theme.breakpoints.down('md')} {
      font-size: 1.75rem;
    }
  `}
`;
