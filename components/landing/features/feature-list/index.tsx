import { FeatureItem } from '../feature-item';
import { FeatureListWrapper } from './feature-list-wrapper.style';
import { FEATURE_LIST } from './feature-list.constant';

export const FeatureList: React.FC = () => (
  <FeatureListWrapper maxWidth="lg">
    {FEATURE_LIST.map(feature => (
      <FeatureItem key={feature.title} {...feature} />
    ))}
  </FeatureListWrapper>
);
