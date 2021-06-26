import { styled } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const LoginDocumentWrapper = styled(Container)`
  padding: 2rem 4rem;
  border-radius: 0.5rem;
`;

LoginDocumentWrapper.defaultProps = { maxWidth: 'xs' };

export default LoginDocumentWrapper;
