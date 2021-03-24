import React from 'react';

import { FeaturesVideoBackground } from './features-video-background.style';
import { FeaturesWrapper } from './features-wrapper.style';
import { FeatureList } from './feature-list';

export const Features: React.FC = () => {
  return (
    <FeaturesWrapper>
      <FeaturesVideoBackground src="/video/features-video-background.mp4" autoPlay loop muted />
      <FeatureList />
    </FeaturesWrapper>
  );
};
