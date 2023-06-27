import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';

import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import { CustomMobileMenu } from '@/components';

export type CustomMobileLayoutProps = {
  darkMode?: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomMobileLayout: React.FC<CustomMobileLayoutProps> = ({
  darkMode = false,
  setDarkMode,
}) => {
  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  return (
    <CustomMobileLayoutStyle $darkMode={darkMode}>
      <Content>
        <Outlet />
      </Content>
      <CustomMobileMenu darkMode={darkMode} setDarkMode={setDarkMode} />
    </CustomMobileLayoutStyle>
  );
};

export const CustomMobileLayoutStyle = styled.div<{ $darkMode: boolean }>``;

export default CustomMobileLayout;
