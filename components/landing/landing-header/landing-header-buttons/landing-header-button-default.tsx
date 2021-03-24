import { Button } from '@material-ui/core';
import styled from '@emotion/styled';

const DefaultButton = styled(Button)`
  border-radius: 10rem;
  padding: 1rem 4rem;
  border-width: 0.2rem;
  transition: all 0.5s;
  position: relative;
  &:hover {
    transform: translateY(-0.3rem);
  }
  &:active {
    transform: translateY(-0.1rem);
  }
`;

export default DefaultButton;
