import React from 'react';
import { Menu, MenuProps, Typography } from 'antd';
import {
  AppstoreOutlined,
  ReadOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

type MenuItem = Required<MenuProps>['items'][number];

const CustomMenu: React.FC = () => {
  function getItem(
    label: string,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label: (
        <Typography.Text style={{ fontSize: 16 }}>{label}</Typography.Text>
      ),
      type,
    } as MenuItem;
  }

  const items: MenuProps['items'] = [
    getItem('Sobre mi', '1', <UserOutlined style={{ fontSize: 16 }} />),
    getItem('Conocimientos', '1', <ReadOutlined style={{ fontSize: 16 }} />),
    getItem(
      'Habilidades',
      '1',
      <ThunderboltOutlined style={{ fontSize: 16 }} />
    ),
    getItem(
      'Mis proyectos',
      '1',
      <AppstoreOutlined style={{ fontSize: 16 }} />
    ),
  ];

  return (
    <CustomMenuStyle>
      <Menu items={items} />
    </CustomMenuStyle>
  );
}; //<ReadOutlined /> <ThunderboltOutlined /> <AppstoreOutlined />

export const CustomMenuStyle = styled.div``;

export default CustomMenu;

