import React from 'react';
import { Outlet } from 'react-router-dom';

const CommonContent: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CommonContent;
