import styled from 'styled-components';

const BackgroundCoverStyle = styled.div`
  width: 100%;
  max-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: url('./src/assets/backgroun.svg') no-repeat center center fixed;
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
    background-color: rgba( 0, 0, 0, .65);
    z-index: -50;
  }
`;

export default BackgroundCoverStyle;
