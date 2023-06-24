import React from 'react';
import isMobile from 'ismobilehook';

const CustomContent: React.FC = () => {
  return <div>{isMobile() ? 'Mobile' : 'Desktop'}</div>;
};

export default CustomContent;
