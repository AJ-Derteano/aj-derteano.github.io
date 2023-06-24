import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider, FloatButton, theme } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';
import isMobile from 'ismobilehook';
import esES from 'antd/locale/es_ES';

import './App.css';

import {
  CustomContent,
  CustomFooter,
  CustomLayout,
  CustomMobileLayout,
  CustomNavbar,
  CustomSider,
} from '@/common';

const { darkAlgorithm, defaultAlgorithm } = theme;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <>
      <ConfigProvider
        locale={esES}
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: '#5bc0de',
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                !isMobile() ? (
                  <CustomLayout
                    darkMode={isDarkMode}
                    sider={<CustomSider />}
                    header={<CustomNavbar />}
                    content={<CustomContent />}
                    footer={<CustomFooter />}
                  />
                ) : (
                  <CustomMobileLayout darkMode={isDarkMode} />
                )
              }
            />
          </Routes>
        </BrowserRouter>
        <FloatButton
          type='primary'
          style={{ right: 24, bottom: 24 }}
          onClick={() => setIsDarkMode(!isDarkMode)}
          icon={<FormatPainterOutlined />}
        />
      </ConfigProvider>
    </>
  );
}

export default App;
