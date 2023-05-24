import React from 'react';
import { Menu, MenuProps } from 'antd';
import styled from 'styled-components';
import { PieChartOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const CustomMenu: React.FC = () => {
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuProps['items'] = [
    getItem('Option 1', '1', <PieChartOutlined />),
  ];

  return (
    <CustomMenuStyle>
      <Menu items={items} />
    </CustomMenuStyle>
  );
};

export const CustomMenuStyle = styled.div``;

export default CustomMenu;
