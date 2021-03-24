import { css } from '@emotion/react';
import styled from '@emotion/styled';

const AboutImage = styled.img`
  ${({ theme }) => css`
    flex: 1;
    max-width: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  `}
`;

AboutImage.defaultProps = {
  alt: 'about-paragraph',
  src: '/img/about-image.svg',
};

export default AboutImage;
