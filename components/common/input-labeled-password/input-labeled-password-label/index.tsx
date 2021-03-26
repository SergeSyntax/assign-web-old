import React from 'react';
import { IconType } from 'react-icons/lib';
import { InputLabeledPasswordLabelIcon } from './input-labeled-password-label-icon.style';
import { InputLabeledPasswordLabelWrapper } from './input-labeled-password-label-wrapper.style';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import { InputLabeledPasswordLabelButton } from './input-labeled-password-label-button.style';

interface Props {
  htmlFor: string;
  name: string;
  icon: IconType;
  isHidden: boolean;
  setIsHidden: () => void;
}

export const InputLabeledPasswordLabel: React.FC<Props> = ({
  name,
  htmlFor,
  children,
  icon,
  isHidden,
  setIsHidden,
}) => {
  return (
    <InputLabeledPasswordLabelWrapper htmlFor={htmlFor}>
      <InputLabeledPasswordLabelIcon component={icon} />
      <span>{name}</span>
      <InputLabeledPasswordLabelButton onClick={setIsHidden}>
        {isHidden ? <IoEyeOffSharp /> : <IoEyeSharp />}
      </InputLabeledPasswordLabelButton>
      {children}
    </InputLabeledPasswordLabelWrapper>
  );
};
