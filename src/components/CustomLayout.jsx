import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import styled from 'styled-components';

const CustomLayout = ({ siderBar, header, content, footer }) => {
  return (
    <CustomLayoutStyle>
      <Layout>
        <Sider>{siderBar}</Sider>
        <Layout>
          <Header>{header}</Header>
          <Content>{content}</Content>
          <Footer>{footer}</Footer>
        </Layout>
      </Layout>
    </CustomLayoutStyle>
  );
};

export const CustomLayoutStyle = styled.div`
  min-height: 100vh;
  min-height: 100vw;
  max-height: 100vh;
  max-width: 100vw;

  .ant-layout-sider-children,
  .ant-layout-header,
  .ant-layout-footer,
  .ant-layout-content {
    background-color: #fff !important;
  }
`;

export default CustomLayout;
