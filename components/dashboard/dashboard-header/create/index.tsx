import styled from '@emotion/styled';
import { Menu, MenuItem } from '@material-ui/core';
import React, { Fragment } from 'react';
import { BiLayerPlus } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import { grey } from '@material-ui/core/colors';
import useDropdown from 'components/common/common/dropdown.hoot';
import { CreateButton } from './create-button';

const CreateDropdown = styled(Menu)`
  & .MuiPaper-root.MuiPopover-paper.MuiPopover-paper {
    min-width: 22rem;
    top: 6.1rem !important;
  }
  & .MuiMenuItem-root {
    opacity: 0.9;
    font-size: 1.68rem;
    font-weight: 800;
    color: ${grey['700']};
    padding: 1rem 1.4rem;
    svg {
      font-size: 1.5em;
      margin-right: 1.4rem;
    }
  }
`;

export const Create: React.FC = () => {
  const [dropdown, openDropdown, closeDropdown] = useDropdown(null);

  return (
    <Fragment>
      <CreateButton onClick={openDropdown} />

      <CreateDropdown
        id="simple-menu"
        anchorEl={dropdown}
        keepMounted
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>
          <BiLayerPlus /> New Project
        </MenuItem>
        <MenuItem>
          {' '}
          <AiOutlineUsergroupAdd />
          New Team
        </MenuItem>
        <MenuItem>
          <RiMailSendLine />
          New Chat
        </MenuItem>
      </CreateDropdown>
    </Fragment>
  );
};
