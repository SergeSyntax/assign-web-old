import React from 'react';
import AboutContainer from './about-container.style';
import { AboutSection } from './about-section.style';
import AboutImage from './about-image.style';
import { RubricList } from './rubric-list/rubric-list';

export const About: React.FC = () => {
  return (
    <AboutSection draggable={false}>
      <AboutContainer>
        <AboutImage />
        <RubricList />
      </AboutContainer>
    </AboutSection>
  );
};
