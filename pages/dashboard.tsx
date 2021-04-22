import styled from '@emotion/styled';
import { DashboardHeader } from 'components/dashboard/dashboard-header';
import { DashboardLayout } from 'components/dashboard/dashboard-layout.style';
import { NextPage } from 'next';
import React from 'react';

// const ContainerDashboard = styled(Container)`
//   flex: 1;
//   display: grid;
//   grid-template-areas: 'sidebar content aside';
//   grid-template-columns: 1fr 3fr 1fr;
//   grid-template-rows: 1fr min-content;
//   justify-items: stretch;
//   grid-gap: 3rem;
//   padding: 3rem;
// `;

// const SideBarDashboard = styled.div`
//   background: #fff;
// `;

const ContentDashboard = styled.div`
  background: #fff;
  flex: 1;
`;

const NotFound: NextPage = () => {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <ContentDashboard></ContentDashboard>
    </DashboardLayout>
  );
};

export default NotFound;
