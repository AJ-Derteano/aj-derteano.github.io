import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export type CustomLayoutProps = {
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

const CustomLayout: React.FC<CustomLayoutProps> = ({
  header,
  content,
  footer,
}) => {
  return (
    <div>
      <Layout>
        <Header
          style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
        >
          {header}
        </Header>
        <Content style={{ minHeight: '100vh' }}>{content}</Content>
        <Footer>{footer}</Footer>
      </Layout>
    </div>
  );
};

export default CustomLayout;
