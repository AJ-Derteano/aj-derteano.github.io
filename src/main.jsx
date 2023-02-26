/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import esES from 'antd/locale/es_ES';

import './index.css';
import App from './App';
import { LangProvider } from './context/LangContext';
import { customTheme } from './theme/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LangProvider>
      <ConfigProvider
        locale={esES}
        theme={{
          token: {
            colorPrimary: '#5bc0de',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </LangProvider>
  </BrowserRouter>
);
