import { styled } from '@material-ui/core/styles';
import { DashboardHeader } from 'src/components/dashboard/dashboard-header';
import { DashboardLayout } from 'src/components/dashboard/dashboard-layout.style';
import { NextPage } from 'next';
import React from 'react';
import SEO from 'src/components/common/seo';

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

// const SideBarDashboard = styled('div')`
//   background: #fff;
// `;

const ContentDashboard = styled('div')`
  background: #f2f2f2;
  flex: 1;
`;

const NotFound: NextPage = () => {
  return (
    <DashboardLayout>
      <SEO
        title="Dashboard"
        description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
      />

      <DashboardHeader />
      <ContentDashboard></ContentDashboard>
    </DashboardLayout>
  );
};

export default NotFound;
