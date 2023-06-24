import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import {
  ActionSheet,
  Button as BtnMobile,
  Card as CardMobile,
  Image as ImgMobile,
  Space as SpaceMobile,
} from 'antd-mobile';

import avatarImg from '@/assets/Avatar.jpeg';
import {
  GithubOutlined,
  LinkedinOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { AntOutline, RightOutline } from 'antd-mobile-icons';
import { Typography } from 'antd';

export type CustomMobileLayoutProps = {
  darkMode?: boolean;
};

const CustomMobileLayout: React.FC<CustomMobileLayoutProps> = ({
  darkMode = false,
}) => {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  return (
    <CustomMobileLayoutStyle>
      <BtnMobile
        style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
        onClick={() => setVisible(true)}
      >
        <MenuOutlined />
      </BtnMobile>
      <ActionSheet
        visible={visible}
        actions={[
          {
            text: (
              <SpaceMobile>
                <ImgMobile
                  width={200}
                  src={avatarImg}
                  className='image__avatar'
                />
              </SpaceMobile>
            ),
            key: 'avatar',
          },
          {
            text: 'Sobre mi',
            key: 'about',
          },
          {
            text: 'Conocimientos',
            key: 'knowledge',
          },
          {
            text: 'Habilidades',
            key: 'skills',
          },
          {
            text: 'Mis proyectos',
            key: 'projects',
          },
          {
            text: (
              <CardMobile>
                <Typography.Title level={5}>Contactame</Typography.Title>
                <SpaceMobile
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <a target='_blank' href='https://linkedin.com/in/aj-derteano'>
                    <LinkedinOutlined style={{ fontSize: '24px' }} />
                  </a>

                  <a target='_blank' href='https://github.com/AJ-Derteano'>
                    <GithubOutlined style={{ fontSize: '24px' }} />
                  </a>
                </SpaceMobile>
              </CardMobile>
            ),
            key: 'contact',
          },
        ]}
        onClose={() => setVisible(false)}
      />
    </CustomMobileLayoutStyle>
  );
};

export const CustomMobileLayoutStyle = styled.div``;

export default CustomMobileLayout;
