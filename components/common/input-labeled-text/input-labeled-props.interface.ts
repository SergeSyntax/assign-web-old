import { IconType } from 'react-icons/lib';

export interface InputLabeledProps {
  icon: IconType;
  name: string;
  placeholder: string;
  label?: string;
  type?: string;
  helperText?: string;
}
