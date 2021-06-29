import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { DashboardSearchForm } from './form';
import { DashboardSearchInput } from './input';

const DashboardSearch: React.FC = () => {
  return (
    <DashboardSearchForm>
      <FiSearch />
      <DashboardSearchInput
        placeholder="Search Content"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </DashboardSearchForm>
  );
};

export default DashboardSearch;
