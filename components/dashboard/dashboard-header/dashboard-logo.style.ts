import { styled } from '@material-ui/core/styles';
import { Logo } from 'components/common/logo';

export const DashboardLogo = styled(Logo)`
  color: #626262;
  font-size: 4rem;
  filter: drop-shadow(2px 2px 5px #626262);
  margin-top: -0.4rem;

  h1 {
    display: none;
  }
`;
