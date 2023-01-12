import React from 'react';
import styled from 'styled-components';

const Main = ({ children }) => {
  return <MainStyle id='main-content'>{children}</MainStyle>;
};

export const MainStyle = styled.div`
  color: #000;
  width: 55%;
  min-height: calc(100vh - 4rem);
  position: relative;
  right: 15%;
  left: 35%;
  margin: 4rem 0;

  @media screen and (max-width: 1280px) {
    width: 65%;
    left: 30%;
  }

  @media screen and (max-width: 780px) {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    left: 0;
    min-height: calc(100vh - 4rem);
    margin: 4rem 0;
  }
`;

export default Main;
