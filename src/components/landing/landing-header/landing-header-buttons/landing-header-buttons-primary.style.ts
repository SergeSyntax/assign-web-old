import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';
import { moveInBottom } from 'src/styles/animations/move-in-bottom.keyframe';

import DefaultButton from './landing-header-button-default';

const LandingHeaderButtonsPrimary = styled(DefaultButton)`
  && {
    ${({ theme }) => css`
      animation: ${moveInBottom} 1s ease-out;
      animation-delay: 0.5s;
      animation-fill-mode: backwards;
      margin-right: 3rem;
      background-color: #e0e0e0;
      color: rgba(0, 0, 0, 0.87);
      ${theme.breakpoints.down('xs')} {
        padding: 2rem 4rem;
        margin-right: 0;
        margin-bottom: 5rem;
        margin-top: 3rem;
        font-size: 2rem;
      }
    `}
  }
`;

export default LandingHeaderButtonsPrimary;
