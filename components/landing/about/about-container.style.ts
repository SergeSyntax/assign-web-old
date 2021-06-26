import { Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

AboutContainer.defaultProps = { maxWidth: 'lg' };

export default AboutContainer;
