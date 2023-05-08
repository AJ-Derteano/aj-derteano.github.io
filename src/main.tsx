import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import App from './App.tsx';
import 'normalize.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
);
