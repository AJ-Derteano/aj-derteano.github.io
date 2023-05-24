import React from 'react';
import { Layout } from 'antd';

const { Content, Footer, Sider } = Layout;

export type CustomLayoutProps = {
  sider?: React.ReactNode;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

const CustomLayout: React.FC<CustomLayoutProps> = ({
  sider,
  header,
  content,
  footer,
}) => {
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
            backgroundColor: '#fff',
          }}
          width='30vw'
        >
          {sider}
        </Sider>
        <Layout>
          <Content style={{ minHeight: '100vh' }}>{content}</Content>
          <Footer>{footer}</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default CustomLayout;
