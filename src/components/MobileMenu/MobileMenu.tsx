import { HomeRoutePaths } from '@/constants/routes.constant';
import {
  AppstoreOutlined,
  FormatPainterOutlined,
  ReadOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { TabBar } from 'antd-mobile';
import { UserContactOutline, UserOutline } from 'antd-mobile-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export type MobileMenuProps = {
  darkMode?: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  darkMode = false,
  setDarkMode,
}) => {
  // ? Global state or store
  // ? Hooks
  const navigate = useNavigate();

  // ? Functions
  // ? Vars
  // ? Effects
  // ? Handlers
  // ? Other
  // ? Return
  return (
    <MobileMenuStyle>
      <TabBar>
        <TabBar.Item
          title='Sobre mi'
          key='about'
          icon={
            <span onClick={() => navigate(HomeRoutePaths.HOME.path)}>
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
    </MobileMenuStyle>
  );
};

export const MobileMenuStyle = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export default MobileMenu;
