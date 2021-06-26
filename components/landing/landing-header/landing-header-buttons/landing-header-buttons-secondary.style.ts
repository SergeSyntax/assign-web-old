import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import { moveInBottom } from 'styles/animations/move-in-bottom.keyframe';
import DefaultButton from './landing-header-button-default';

const LandingHeaderButtonsSecondary = styled(DefaultButton)`
  && {
    ${({ theme }) => css`
      animation: ${moveInBottom} 1s ease-out;
      animation-delay: 0.8s;
      animation-fill-mode: backwards;
      color: #e0e0e0;
      border-color: #e0e0e080;
      &:hover {
        background: #e0e0e0;
        color: #000;
      }

      ${theme.breakpoints.down('xs')} {
        padding: 2rem 4rem;
        font-size: 2rem;
      }
    `}
  }
`;

export default LandingHeaderButtonsSecondary;
