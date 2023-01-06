import React from 'react';
import styled from 'styled-components';

const Main = ({ children }) => {
  return <MainStyle id='main-content'>{children}</MainStyle>;
};

export const MainStyle = styled.div`
  color: #fff;
  width: 55%;
  min-height: calc(100vh - 4rem);
  position: relative;
  right: 15%;
  left: 35%;
  margin-top: 4rem;

  @media screen and (max-width: 1280px) {
    width: 65%;
    left: 30%;
    margin-top: 4rem;
  }

  @media screen and (max-width: 780px) {
    width: 90%;
    left: 5%;
    min-height: calc(100vh - 5rem);
    margin-top: 5rem;
  }
`;

export default Main;
