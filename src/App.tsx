import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider, FloatButton, Tooltip, theme } from 'antd';
import esES from 'antd/locale/es_ES';
import './App.css';
import {
  CustomContent,
  CustomFooter,
  CustomLayout,
  CustomNavbar,
  CustomSider,
} from '@/common';
import { FormatPainterOutlined, PlusOutlined } from '@ant-design/icons';

const { darkAlgorithm, defaultAlgorithm } = theme;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
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
              <CustomLayout
                darkMode={isDarkMode}
                sider={<CustomSider />}
                header={<CustomNavbar />}
                content={<CustomContent />}
                footer={<CustomFooter />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <FloatButton.Group
        trigger='hover'
        type='primary'
        style={{ right: 24 }}
        icon={<PlusOutlined />}
      >
        <Tooltip
          title={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
          placement='left'
        >
          <FloatButton
            icon={<FormatPainterOutlined />}
            onClick={() => setIsDarkMode((previus) => !previus)}
          />
        </Tooltip>
      </FloatButton.Group>
    </ConfigProvider>
  );
}

export default App;
