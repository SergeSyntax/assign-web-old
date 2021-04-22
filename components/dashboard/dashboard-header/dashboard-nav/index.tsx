import React from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { MdHome, MdLayers, MdPeople } from 'react-icons/md';
import { WrapperNavHeaderDashboard as DashboardNavWrapper } from './dashboard-nav-wrapper.style';
import { DashboardNavItem } from './dashboard-nav-item.style';

export const DashboardNav: React.FC = () => {
  return (
    <DashboardNavWrapper
      TabIndicatorProps={{ style: { background: '#212121' } }}
      value={1}
      indicatorColor="primary"
      centered
    >
      <DashboardNavItem icon={<MdHome />} label="Home" />
      <DashboardNavItem icon={<MdLayers />} label="Projects" />
      <DashboardNavItem icon={<MdPeople />} label="Teams" />
      <DashboardNavItem icon={<AiFillMessage />} label="Members" />
    </DashboardNavWrapper>
  );
};
