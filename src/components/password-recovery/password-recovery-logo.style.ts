import { styled } from '@material-ui/core/styles';
import { Logo } from 'src/components/common/logo';

export const PasswordRecoveryLogo = styled(Logo)`
  && {
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 4em;
    color: transparent;
    background: linear-gradient(-225deg, #5b86e5 0%, #36d1dc 70%);
    background-clip: text;
    svg {
      color: #5fb8e6;
    }
  }
`;
