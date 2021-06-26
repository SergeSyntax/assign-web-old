import { styled } from '@material-ui/core/styles';
import SubmitButton from './submit';

const SubmitButtonWide = styled(SubmitButton)``;

SubmitButtonWide.defaultProps = { fullWidth: true };

export default SubmitButtonWide;
