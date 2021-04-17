import React from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { MdHome, MdLayers, MdPeople } from 'react-icons/md';
import { WrapperNavHeaderDashboard } from './wrapper-nav-header-dashboard.style';
import { ItemNavHeaderDashboard } from './item-nav-header-dashboard.style';

export const NavHeaderDashboard: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange: React.ChangeEvent = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <WrapperNavHeaderDashboard
      TabIndicatorProps={{ style: { background: '#212121' } }}
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      centered
    >
      <ItemNavHeaderDashboard icon={<MdHome />} label="Home" />
      <ItemNavHeaderDashboard icon={<MdLayers />} label="Projects" />
      <ItemNavHeaderDashboard icon={<MdPeople />} label="Teams" />
      <ItemNavHeaderDashboard icon={<AiFillMessage />} label="Members" />
    </WrapperNavHeaderDashboard>
  );
};
