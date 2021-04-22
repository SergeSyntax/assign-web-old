import styled from '@emotion/styled';
import { Avatar, Button, ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { Fragment, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

const UserButton = styled(Button)`
  padding: unset;
  border-radius: 100%;
  min-width: unset;
`;

const UserIcon = styled(Avatar)`
  color: #626262;
  background-color: ${grey['200']};
  font-size: 1.6rem;
`;

const getUserNameAndLetter = (name: string, email: string): { name: string; letter: string } => {
  if (name && name !== 'unknown') {
    const secondLetter = /\s[a-z]/i.exec(name);
    const firstLetter = name[0];
    const letter = secondLetter ? `${firstLetter}${secondLetter[0][1]}` : firstLetter;
    return { name, letter };
  } else {
    const name = email.split('@')[0];
    const letter = name[0].toUpperCase();

    return { name, letter };
  }
};

export const UserOptions: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  return (
    <Fragment>
      <UserButton onClick={event => setAnchorEl(event.currentTarget)}>
        <UserIcon>
          {getUserNameAndLetter('Sergway Khodyachikh', 'ramdom_email@gmail.com').letter}
        </UserIcon>
      </UserButton>

      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>
          <ListItemIcon>
            <FiLogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
