import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import { Logo } from 'components/common/logo';
import { moveInLeft } from 'styles/animations/move-in-left.keyframe';

export const LandingHeaderLogo = styled(Logo)`
  ${({ theme }) => css`
    & {
      animation: ${moveInLeft} 1s ease-out;
      align-self: flex-start;
      margin: 3rem;

      ${theme.breakpoints.down('xs')} {
        margin-top: 5rem;
        font-size: 5rem;
        align-self: center;
      }
    }
  `}
`;
