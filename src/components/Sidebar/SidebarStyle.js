import styled from 'styled-components';

const SidebarStyle = styled.div`
  color: #fff;
  background-color: #5bc0de;
  display: inline-block;
  height: clamp(100vh, 100vh, 100vh);
  width: clamp(45px, 20%, 80vw);
  position: fixed;
  left: 10%;
  z-index: 9999;

  .close-button {
    position: absolute;
    width: 40px;
    height: 40px;
    font-size: 40px;
    /* background-color: rgba(255, 255, 255, 0.9); */
    color: #5bc0de;
    display: none;
  }

  &.open {
    left: 0;
  }
  
  @media screen and (max-width: 1281px){
    width: 25%;
    left: 0%;
  }

  @media screen and (max-width: 780PX) {
    height: 100%;
    max-height: 100vh;
    width: 80vw;
    left: -80vw;

    -webkit-transition: left 0.3s ease-out;
    -ms-transition: left 0.3s ease-out;
    transition: left 0.3s ease-out;

    .close-button {
      display: block;
      padding: 5px;
      right: -50px;
    }
  }

  .container {
    width: 100%;
    margin-top: 5vh;
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

    .language-button {
      display: inline-block;
      text-align: center;
      width: 40px;
      height: 40px;
      line-height: 40px;

      &:hover {
        cursor: pointer;
        background-color: #fff;
        color: #5bc0de;
        -webkit-transition: background-color 0.3s linear;
        -ms-transition: background-color 0.3s linear;
        transition: background-color 0.3s linear;
      }

      @media screen and (max-width: 1281px){
        width: 28px;
        height: 28px;
        line-height: 28px;
      }

      @media screen and (max-width: 780px) {
        margin-top: 2rem;
      }
    }
  }

  .main-nav {
    width: 100%;
    margin-top: 1rem;
    text-align: center;

    .main-menu{
      padding: 0;
      border-bottom: 2px solid #fff;

      li{
        &.active {
          background-color: #fff;
          color: #fff;
        }

        &:hover {
          background-color: #fff;
          -webkit-transition: background-color 0.3s linear;
          -ms-transition: background-color 0.3s linear;
          transition: background-color 0.3s linear;
        }
      }

      a {
        color:#fff;
        height: 70px;
        line-height: 70px;
        display: inline-block;
        font-size: 16px;
        font-weight: 700;
        width: 100%;
        transition: all 0.5s;
        border-top: 2px solid #fff;

        &:hover{
          color: #5bc0de;
        }
      }

      @media screen and (max-width: 1281px){
        a {
          height: 40px;
          line-height: 40px;
          font-size: 14px;
        }
      }
    }
  }

  .social-network {
    width: 100%;

    @media screen and (max-width: 780px) {
      margin-top: 2rem;
    }

    .social-icons {
      width: 100%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      li {
        a {
          margin-left: 12px;
          width: 32px;
          height: 32px;
          padding: 10px;
          display: inline-block;
          text-align: center;
          line-height: 36px;
          background-color: rgba(0, 0, 0, 0.2);
          color: #fff;
          font-size: 32px;
          transition: all 0.5s;

          &:hover {
            color: #5bc0de;
            background-color: #fff;
          }
        }

        @media screen and (max-width: 1281px){
          a {
            margin-left: 8px;
            width: 24px;
            height: 24px;
            padding: 5px;
            line-height: 24px;
            font-size: 24px;
          }
        }
      }

    } 
  }

  .copyright-text {
    width: 100%;
    padding: 1rem 0;
    position: absolute; 
    bottom: 0rem;
    text-align: center;
  }
`;

export default SidebarStyle;
