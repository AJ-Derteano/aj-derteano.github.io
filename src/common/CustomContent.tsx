import React from 'react';
import isMobile from 'ismobilehook';
import { Outlet } from 'react-router-dom';

const CustomContent: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CustomContent;
