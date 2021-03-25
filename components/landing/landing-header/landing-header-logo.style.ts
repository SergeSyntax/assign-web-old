import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Logo } from 'components/common/logo';
import { moveInLeft } from 'styles/animations/move-in-left.keyframe';

export const LandingHeaderLogo = styled(Logo)`
  ${({ theme }) => css`
    & {
      animation: ${moveInLeft} 1s ease-out;
      align-self: flex-start;
      margin: 3rem;

      ${theme.breakpoints.down('xs')} {
        font-size: 3rem;
        align-self: center;
      }
    }
  `}
`;