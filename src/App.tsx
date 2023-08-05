import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider, FloatButton, theme } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';
import isMobile from 'ismobilehook';
import esES from 'antd/locale/es_ES';

import './App.css';

import {
  CommonContent,
  CommonFooter,
  CommonNavbar,
  CommonSider,
  MobileLayout,
  WebLayout,
} from '@/common';
import { AboutMe } from './components';
import { Knowledge } from './components/Knowledge';
import { AboutRoutePaths, KnowledgeRoutePaths } from './constants';

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
                  <WebLayout
                    darkMode={isDarkMode}
                    sider={<CommonSider />}
                    header={<CommonNavbar />}
                    content={<CommonContent />}
                    footer={<CommonFooter />}
                  />
                ) : (
                  <MobileLayout
                    darkMode={isDarkMode}
                    setDarkMode={setIsDarkMode}
                  />
                )
              }
            >
              <Route index element={<AboutMe />} />
              <Route path={AboutRoutePaths.HOME.path} element={<AboutMe />} />
              <Route
                path={KnowledgeRoutePaths.HOME.path}
                element={<Knowledge />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
        {!isMobile() && (
          <FloatButton
            type='primary'
            style={{ right: 24, bottom: 24 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            icon={<FormatPainterOutlined />}
          />
        )}
      </ConfigProvider>
    </>
  );
}

export default App;
