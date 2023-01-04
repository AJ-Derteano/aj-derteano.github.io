import styled from "styled-components";

const SidebarStyle = styled.div`
  background-color: #5bc0de;
  height: clamp(100vh, 100vh, 100vh);
  width: clamp(45px, 20%, 80vw);
  position: fixed;
  left: 10%;
  z-index: 9999;

  @media screen and (max-width: 845px) {
    width: 320px;
    left: 10%;
  }

  @media screen and (max-width: 1280px){
    width: 25%;
    left: 0%;
  }

  .container {
    width: 100%;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
    }

    .author-content{
      text-align: center;
      color: #fff;
      
      h4 {
        font-size: 26px;
        font-weight: 700;
        letter-spacing: 0.25px;
        margin-bottom: 0;
      }

      span{
        font-size: 13px;
        font-style: italic;
      }
    }
  }
`;

export default SidebarStyle;