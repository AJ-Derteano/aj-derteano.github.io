import React from 'react';
import { Menu, MenuProps, Typography } from 'antd';
import {
  AppstoreOutlined,
  ReadOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import {
  AboutRoutePaths,
  KnowledgeRoutePaths,
  ProjectsRoutePaths,
} from '@/constants';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const WebMenu: React.FC = () => {
  const navigate = useNavigate();

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
    getItem(
      AboutRoutePaths.HOME.name,
      AboutRoutePaths.HOME.key,
      <UserOutlined style={{ fontSize: 16 }} />
    ),
    getItem(
      KnowledgeRoutePaths.HOME.name,
      KnowledgeRoutePaths.HOME.key,
      <ReadOutlined style={{ fontSize: 16 }} />
    ),
    getItem(
      'Habilidades',
      'skills',
      <ThunderboltOutlined style={{ fontSize: 16 }} />
    ),
    getItem(
      'Mis proyectos',
      'projects',
      <AppstoreOutlined style={{ fontSize: 16 }} />
    ),
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    // Go to home
    if (e.key === AboutRoutePaths.HOME.key) {
      navigate(AboutRoutePaths.HOME.path);
    }

    // Go to knowledge
    if (e.key === KnowledgeRoutePaths.HOME.key) {
      navigate(KnowledgeRoutePaths.HOME.path);
    }

    // Go to projects
    if (e.key === 'projects') {
      navigate(ProjectsRoutePaths.HOME.path);
    }
  };

  return (
    <WebMenuStyle>
      <Menu onClick={onClick} items={items} />
    </WebMenuStyle>
  );
};

export const WebMenuStyle = styled.div``;

export default WebMenu;
