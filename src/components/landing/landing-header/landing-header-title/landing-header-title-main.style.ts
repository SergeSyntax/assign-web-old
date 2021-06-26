import { styled } from '@material-ui/core/styles';
import { moveInLeft } from 'src/styles/animations/move-in-left.keyframe';

export const LandingHeaderTitleMain = styled('span')`
  display: inline-block;
  animation: ${moveInLeft} 1s ease-out;
`;
