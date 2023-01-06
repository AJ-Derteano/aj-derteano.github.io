import React from 'react';
import styled from 'styled-components';

const BackgroundImage = ({ children }) => {
  return <BackgroundImageStyle>{children}</BackgroundImageStyle>;
};

export const BackgroundImageStyle = styled.div`
  width: 100%;
  max-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: url('./src/assets/code_typing_concep_illustration.jpg') no-repeat
    center center fixed;
  background-size: cover;
  z-index: -99;

  &:after {
    content: '';
    width: 100%;
    max-width: 100vw;
    height: 100%;
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -50;
  }
`;

export default BackgroundImage;
