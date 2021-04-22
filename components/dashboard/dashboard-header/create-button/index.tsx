import React from 'react';
import { MdAdd } from 'react-icons/md';
import { CreateButtonLayout } from './create-button-layout.style';

export const CreateButton: React.FC = () => {
  return (
    <CreateButtonLayout>
      <MdAdd />
    </CreateButtonLayout>
  );
};
