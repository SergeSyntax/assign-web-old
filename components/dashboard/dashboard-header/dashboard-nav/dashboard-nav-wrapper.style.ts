import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Tabs } from '@material-ui/core';

export const WrapperNavHeaderDashboard = styled(Tabs)`
  margin: 0rem auto 0 auto;
  ${({ theme }) => css`
    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  `}
`;
