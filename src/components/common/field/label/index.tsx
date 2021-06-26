import React from 'react';
import { IconType } from 'react-icons/lib';
import { LabelIcon } from './label-icon.style';
import { LabelWrapper } from './label-wrapper.style';

interface Props {
  htmlFor: string;
  name: string;
  icon: IconType;
}

export const Label: React.FC<Props> = ({ name, htmlFor, children, icon }) => {
  return (
    <LabelWrapper htmlFor={htmlFor}>
      <LabelIcon component={icon} />
      <span>{name}</span>
      {children}
    </LabelWrapper>
  );
};
