import { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { LangContext } from '../../context/LangContext';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMenu,
  AiFillCloseCircle,
  AiOutlineLine,
} from 'react-icons/ai';
import { SidebarButton } from '../SidebarButton';

const Sidebar = ({ links }) => {
  const language = useContext(LangContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [buttonActive, setButtonActive] = useState('');

  const handleClickLink = (e) => {
    const { name } = e.target;
    setOpenMenu(false);
    setButtonActive(name);
  };

  return (
    <SidebarStyle id='menu' className={openMenu ? 'open' : ''}>
      <div className='close-button'>
        <span
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {openMenu ? <AiFillCloseCircle /> : <AiOutlineMenu />}
        </span>
      </div>
      <div className='container'>
        <div className='image'>
          <a href='./'>
            <img
              src='https://avatars.githubusercontent.com/u/55628495'
              alt='Perfil'
            />
          </a>
        </div>
        <div className='author-content'>
          <h4>
            <FormattedMessage id='sidebar.name' defaultMessage='AJ Derteano' />
          </h4>
          <span>
            <FormattedMessage
              id='sidebar.profession'
              defaultMessage='Desarrollador de Software'
            />
          </span>
        </div>
        <div className='main-nav'>
          <nav className='main-nav' role='navigation'>
            <ul className='main-menu'>
              {links.map((link) => (
                <SidebarButton
                  key={link.name}
                  name={link.name}
                  to={link.to}
                  text={
                    <FormattedMessage
                      id={link.id_text}
                      defaultMessage={link.text}
                    />
                  }
                  handleClickLink={handleClickLink}
                  active={buttonActive}
                />
              ))}
            </ul>
          </nav>
        </div>
        <div className='language-buttons'>
          <span
            className='language-button'
            onClick={() => {
              language.handleLanguage('es-PE');
            }}
          >
            ES
          </span>
          <AiOutlineLine className='separator' />
          <span
            className='language-button'
            onClick={() => {
              language.handleLanguage('en-US');
            }}
          >
            EN
          </span>
        </div>
        <div className='social-network'>
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/AJ-Derteano'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/aj-derteano/'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className='copyright-text'>
          <FormattedMessage
            id='sidebar.copy-rigth'
            defaultMessage='All rights reserved.'
          />
        </div>
      </div>
    </SidebarStyle>
  );
};

export const SidebarStyle = styled.div`
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
    color: #5bc0de;
    display: none;
  }

  @media screen and (max-width: 1281px) {
    width: 25%;
    left: 0%;
  }

  @media screen and (max-width: 780px) {
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

    &.open {
      left: 0;
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

    .author-content {
      text-align: center;

      h4 {
        font-size: 26px;
        font-weight: 700;
        letter-spacing: 0.25px;
        margin-bottom: 0;
      }

      span {
        font-size: 13px;
        font-style: italic;
      }
    }

    .language-buttons {
      margin: 1rem 0;

      .separator {
        transform: rotate(90deg);
      }

      .language-button {
        display: inline-block;
        text-align: center;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 1.2rem;

        &:hover {
          cursor: pointer;
          background-color: #fff;
          color: #5bc0de;
          -webkit-transition: background-color 0.3s linear;
          -ms-transition: background-color 0.3s linear;
          transition: background-color 0.3s linear;
        }

        @media screen and (max-width: 1281px) {
          width: 28px;
          height: 28px;
          line-height: 28px;
        }

        @media screen and (max-width: 780px) {
          margin-top: 2rem;
        }
      }
    }
  }

  .main-nav {
    width: 100%;
    margin-top: 1rem;
    text-align: center;

    .main-menu {
      padding: 0;
      border-bottom: 2px solid #fff;

      @media screen and (max-width: 1280px) {
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
      margin-top: 1rem;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      li {
        a {
          width: 45px;
          height: 45px;
          font-size: 40px;
          line-height: 40px;
          text-align: center;
          margin: 0 12px;
          color: #fff;
          display: inline-block;
          padding: 2.5px;
          transition: all 0.5s;
          background-color: rgba(0, 0, 0, 0.2);

          &:hover {
            color: #5bc0de;
            background-color: #fff;
          }
        }

        @media screen and (max-width: 1280px) {
          a {
            margin: 0 8px;
            width: 30px;
            height: 30px;
            padding: 2.5px;
            line-height: 25px;
            font-size: 25px;
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

export default Sidebar;
