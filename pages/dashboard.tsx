// import styled from '@emotion/styled';
// import {
//   AppBar,
//   Container,
//   InputAdornment,
//   Paper,
//   Tab,
//   Tabs,
//   TextField,
//   Toolbar,
// } from '@material-ui/core';
// import { LogoIcon } from 'components/common/logo/logo-icon.style';
// import { WrapperDashboard } from 'components/dashboard/wrapper-dashboard.style';
// import { NextPage } from 'next';
// import React from 'react';
// import { FiSearch } from 'react-icons/fi';
// import { MdHome, MdLayers, MdMail, MdPeople } from 'react-icons/md';

// const LogoDashboard = styled(LogoIcon)`
//   color: rgba(36, 41, 46, 0.7);
//   font-size: 4rem;
//   /* filter: drop-shadow(0 8px 24px rgb(95 155 241 / 35%)); */
//   /* color: transparent; */
//   /* background-clip: text; */
//   /* box-shadow: 0 8px 24px rgb(95 155 241 / 35%); */
//   filter: drop-shadow(2px 2px 5px #b5dcff);
//   /* box-shadow: 0 8px 24px rgb(95 155 241 / 35%); */
// `;

// const SearchDashboard = styled(TextField)`
//   max-width: 20rem;
//   margin: 0 5rem;
//   .MuiOutlinedInput-inputMarginDense {
//     padding-top: 0.5rem;
//     padding-bottom: 0.5rem;
//   }
// `;

// const AppBarDashboard = styled(AppBar)`
//   background: #f9f9f9;
// `;

// const ContainerDashboard = styled(Container)`
//   flex: 1;
//   display: grid;
//   grid-template-areas: 'sidebar content aside';
//   grid-template-columns: 1fr 3fr 1fr;
//   grid-template-rows: 1fr;
//   justify-items: stretch;

//   /* grid-template-rows:  max-content; */
//   /* grid-template-columns:  max-content; */
//   grid-gap: 3rem;
//   padding: 3rem;

//   /* background:red; */
// `;

// const SideBarDashboard = styled.div`
//   background: #fff;
// `;

// const ContentDashboard = styled.div`
//   background: #fff;
//   flex: 1;
// `;

// const NotFound: NextPage = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange: React.ChangeEvent = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <WrapperDashboard>
//       <AppBarDashboard position="static" variant="outlined" color="default">
//         {' '}
//         <Toolbar>
//           <LogoDashboard />
//           <SearchDashboard
//             variant="outlined"
//             size="small"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <FiSearch />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Tabs
//             TabIndicatorProps={{ style: { background: '#212121' } }}
//             value={value}
//             onChange={handleChange}
//             indicatorColor="primary"
//             centered
//           >
//             <Tab
//               style={{ fontSize: '1.2rem', minWidth: '9rem', minHeight: 'unset' }}
//               icon={<MdHome style={{ fontSize: '2.5rem', marginBottom: 0 }} />}
//               label="Home"
//             />
//             <Tab
//               style={{ fontSize: '1.2rem', minWidth: '9rem', minHeight: 'unset' }}
//               icon={<MdLayers style={{ fontSize: '2.5rem', marginBottom: 0 }} />}
//               label="Projects"
//             />
//             <Tab
//               style={{ fontSize: '1.2rem', minWidth: '9rem', minHeight: 'unset' }}
//               icon={<MdPeople style={{ fontSize: '2.5rem', marginBottom: 0 }} />}
//               label="Teams"
//             />
//             <Tab
//               style={{ fontSize: '1.2rem', minWidth: '9rem', minHeight: 'unset' }}
//               icon={<MdMail style={{ fontSize: '2.5rem', marginBottom: 0 }} />}
//               label="Teams"
//             />
//           </Tabs>
//         </Toolbar>
//       </AppBarDashboard>

//       <ContainerDashboard maxWidth="lg">
//         <SideBarDashboard>test</SideBarDashboard> <ContentDashboard>content</ContentDashboard>
//       </ContainerDashboard>
//     </WrapperDashboard>
//   );
// };

// export default NotFound;
