import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarButton = ({
  text = 'button',
  name = 'button',
  to,
  relative = 'path',
  handleClickLink,
  active,
}) => {
  return (
    <SidebarButtonStyle className={active === name ? 'active' : ''}>
      <Link
        name={name}
        to={to}
        relative={relative}
        onClick={(e) => {
          handleClickLink(e);
        }}
      >
        {text}
      </Link>
    </SidebarButtonStyle>
  );
};

export const SidebarButtonStyle = styled.li`
  &.active {
    background-color: #fff;

    a {
      color: #5bc0de;
    }
  }

  &:hover {
    background-color: #fff;
    -webkit-transition: background-color 0.3s linear;
    -ms-transition: background-color 0.3s linear;
    transition: background-color 0.3s linear;
  }

  a {
    color: #fff;
    height: 70px;
    line-height: 70px;
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    transition: all 0.5s;
    border-top: 2px solid #fff;

    &:hover {
      color: #5bc0de;
    }
  }
`;

export default SidebarButton;
