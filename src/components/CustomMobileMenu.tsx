import {
  AppstoreOutlined,
  FormatPainterOutlined,
  ReadOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { TabBar } from 'antd-mobile';
import { UserContactOutline, UserOutline } from 'antd-mobile-icons';
import React from 'react';
import styled from 'styled-components';

export type CustomMobileMenuProps = {
  darkMode?: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomMobileMenu: React.FC<CustomMobileMenuProps> = ({
  darkMode = false,
  setDarkMode,
}) => {
  return (
    <CustomMobileMenuStyle>
      <TabBar>
        <TabBar.Item
          title='Sobre mi'
          key='about'
          icon={
            <span onClick={() => alert('fun')}>
              <UserOutline />
            </span>
          }
        />
        <TabBar.Item
          title='conocimientos'
          key='knowledge'
          icon={
            <span onClick={() => alert('fun')}>
              <ReadOutlined />
            </span>
          }
        />
        <TabBar.Item
          title='Habilidades'
          key='skill'
          icon={
            <span onClick={() => alert('fun')}>
              <ThunderboltOutlined />
            </span>
          }
        />
        <TabBar.Item
          title='Proyectos'
          key='projects'
          icon={
            <span onClick={() => alert('fun')}>
              <AppstoreOutlined />
            </span>
          }
        />
        <TabBar.Item
          title='Contacto'
          key='contact'
          icon={
            <span onClick={() => alert('fun')}>
              <UserContactOutline />
            </span>
          }
        />
        <TabBar.Item
          title='Tema'
          key='theme'
          icon={
            <span onClick={() => setDarkMode((value) => !value)}>
              <FormatPainterOutlined />
            </span>
          }
        />
      </TabBar>
    </CustomMobileMenuStyle>
  );
};

export const CustomMobileMenuStyle = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export default CustomMobileMenu;
