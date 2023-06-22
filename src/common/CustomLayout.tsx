import React from 'react';
import { Layout, theme } from 'antd';

const { Content, Footer, Sider } = Layout;

export type CustomLayoutProps = {
  darkMode?: boolean;
  sider?: React.ReactNode;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

const CustomLayout: React.FC<CustomLayoutProps> = ({
  darkMode,
  sider,
  header,
  content,
  footer,
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            backgroundColor: darkMode ? '#141414' : '#fefefe',
          }}
          width='30vw'
        >
          {sider}
        </Sider>
        <Layout
          style={{
            width: 'calc(70vw)',
            minHeight: '100vh',
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: 10,
                minHeight: '80vh',
                color: darkMode ? 'rgba(255, 255, 255, 0.85)' : '#000',
              }}
            >
              {content}
            </div>
          </Content>
          <Footer
            style={{
              margin: '24px 16px 0',
              padding: 0,
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: 10,
                minHeight: '10vh',
              }}
            >
              {footer}
            </div>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default CustomLayout;
