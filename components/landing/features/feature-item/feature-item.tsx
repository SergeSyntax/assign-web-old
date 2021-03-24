import { FeatureParagraph } from './feature-item-paragraph.style';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { FeatureWrapper } from './feature-item-wrapper.style';
import { FeatureTitle } from './feature-item-title.style';
import { FeatureIcon } from './feature-icon';

interface Props {
  title: string;
  content: string;
  icon: IconType;
}

export const FeatureItem: React.FC<Props> = ({ icon, title, content }) => {
  return (
    <FeatureWrapper>
      <FeatureIcon component={icon} />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureParagraph>{content}</FeatureParagraph>
    </FeatureWrapper>
  );
};
