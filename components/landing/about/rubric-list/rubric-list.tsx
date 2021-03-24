import { RubricItem } from '../rubric-item';
import { RUBRIC_LIST } from './rubric-list.constant';
import { RubricListWrapper } from './rubric-list-wrapper.style';

export const RubricList: React.FC = () => (
  <RubricListWrapper>
    {RUBRIC_LIST.map(rubric => (
      <RubricItem key={rubric.title} {...rubric} />
    ))}
  </RubricListWrapper>
);
