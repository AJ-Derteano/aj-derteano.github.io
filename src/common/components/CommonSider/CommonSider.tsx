import React from 'react';
import { Card, Image, Space, Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { WebMenu } from '@/components';
import avatarImg from '@/assets/Avatar.jpeg';

const CommonSider: React.FC = () => {
  return (
    <CommonSiderStyle>
      <Space direction='vertical' style={displayCenter}>
        <Space style={displayCenter}>
          <Image
            width={200}
            src={avatarImg}
            className='image__avatar'
            preview={false}
          />
        </Space>

        <Typography.Title level={2} className='title__avatar'>
          AJ Derteano
          <Typography.Paragraph>Software developer</Typography.Paragraph>
        </Typography.Title>

        <WebMenu />

        <Card
          unselectable='on'
          actions={[
            <a target='_blank' href='https://linkedin.com/in/aj-derteano'>
              <LinkedinOutlined style={{ fontSize: '24px' }} />
            </a>,
            <a target='_blank' href='https://github.com/AJ-Derteano'>
              <GithubOutlined style={{ fontSize: '24px' }} />
            </a>,
          ]}
          style={{
            position: 'absolute',
            bottom: '0.2rem',
            right: 0,
            left: 0,
            border: 0,
          }}
        >
          <Card.Meta
            title='Contactame'
            description='Puedes encontrar me en todas mis redes'
          />
        </Card>
      </Space>
    </CommonSiderStyle>
  );
};

const displayCenter: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
};

export const CommonSiderStyle = styled.div`
  padding-top: 3rem;

  .title__avatar {
    margin: 0;
    text-align: center;
  }
`;

export default CommonSider;
