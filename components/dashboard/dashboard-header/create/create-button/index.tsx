import React from 'react';
import { MdAdd } from 'react-icons/md';
import { CreateButtonLayout } from './create-button-layout.style';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const CreateButton: React.FC<Props> = ({ onClick }) => {
  return (
    <CreateButtonLayout aria-controls="simple-menu" aria-haspopup="true" onClick={onClick}>
      <MdAdd />
    </CreateButtonLayout>
  );
};
