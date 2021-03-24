import React from 'react';
import { IconType } from 'react-icons/lib';
import { LabelIcon } from './label-icon.style';
import { LabelWrapper } from './label-wrapper.style';

interface Props {
  htmlFor: string;
  value: string;
  icon: IconType;
}

export const Label: React.FC<Props> = ({ value, htmlFor, children, icon }) => {
  return (
    <LabelWrapper htmlFor={htmlFor}>
      <LabelIcon component={icon} />
      <span>{value}</span>
      {children}
    </LabelWrapper>
  );
};
