import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';

import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import { MobileMenu } from '@/components';

export type MobileLayoutProps = {
  darkMode?: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileLayout: React.FC<MobileLayoutProps> = ({
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
    <MobileLayoutStyle $darkMode={darkMode}>
      <Content>
        <Outlet />
      </Content>
      <MobileMenu darkMode={darkMode} setDarkMode={setDarkMode} />
    </MobileLayoutStyle>
  );
};

export const MobileLayoutStyle = styled.div<{ $darkMode: boolean }>``;

export default MobileLayout;
