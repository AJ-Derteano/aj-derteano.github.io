import { CustomMenu } from '@/components';
import { Divider, Image, Space, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const CustomSider: React.FC = () => {
  return (
    <CustomSiderStyle>
      <Space direction='vertical' style={displayCenter}>
        <Space style={displayCenter}>
          <Image
            width={200}
            src='https://placebeard.it/200x200'
            className='image__avatar'
            preview={false}
          />
        </Space>
        <Typography.Title level={2} className='title__avatar'>
          AJ Derteano
          <Typography.Paragraph>Software developer</Typography.Paragraph>
        </Typography.Title>

        <CustomMenu />
      </Space>
    </CustomSiderStyle>
  );
};

const displayCenter: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
};

export const CustomSiderStyle = styled.div`
  padding-top: 3rem;

  .image__avatar {
    border-radius: 50%;
  }

  .title__avatar {
    margin: 0;
    text-align: center;
  }
`;

export default CustomSider;
