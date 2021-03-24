import { Theme } from '@material-ui/core';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LabelWrapper = styled.label`
  ${({ theme }: { theme: Theme }) => css`
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 2rem;
    padding: 0.5rem;
    color: ${theme.palette.grey.A400};
  `}
`;
