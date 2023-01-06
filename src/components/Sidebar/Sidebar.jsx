import { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { LangContext } from '../../context/LangContext';
import { Link } from 'react-router-dom';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMenu,
  AiFillCloseCircle,
} from 'react-icons/ai';

const Sidebar = () => {
  const language = useContext(LangContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [buttonActive, setButtonActive] = useState('');

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
              <li className={buttonActive === 'about-me' ? 'active' : ''}>
                <Link
                  to='/'
                  relative='path'
                  onClick={() => {
                    setButtonActive('about-me');
                  }}
                >
                  <FormattedMessage
                    id='sidebar.about-me'
                    defaultMessage='About me'
                  />
                </Link>
              </li>
              <li className={buttonActive === 'skill' ? 'active' : ''}>
                <Link
                  to='/skill'
                  relative='path'
                  onClick={() => {
                    setButtonActive('skill');
                  }}
                >
                  <FormattedMessage id='sidebar.skill' defaultMessage='Skill' />
                </Link>
              </li>
              <li className={buttonActive === 'projects' ? 'active' : ''}>
                <Link
                  to='/projects'
                  relative='path'
                  onClick={() => {
                    setButtonActive('projects');
                  }}
                >
                  <FormattedMessage
                    id='sidebar.projects'
                    defaultMessage='My projects'
                  />
                </Link>
              </li>
              <li className={buttonActive === 'contact' ? 'active' : ''}>
                <Link
                  to='/contact-me'
                  relative='path'
                  onClick={() => {
                    setButtonActive('contact');
                  }}
                >
                  <FormattedMessage
                    id='sidebar.contact'
                    defaultMessage='Contact me'
                  />
                </Link>
              </li>
              <li className={buttonActive === 'contact' ? 'active' : ''}>
                <Link
                  to='/attributes'
                  relative='path'
                  onClick={() => {
                    setButtonActive('attributes');
                  }}
                >
                  <FormattedMessage
                    id='sidebar.attributes'
                    defaultMessage='Attributes'
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <span
            className='language-button'
            onClick={() => {
              language.handleLanguage('es-PE');
            }}
          >
            ES
          </span>{' '}
          |{' '}
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
    /* background-color: rgba(255, 255, 255, 0.9); */
    color: #5bc0de;
    display: none;
  }

  &.open {
    left: 0;
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

  .main-nav {
    width: 100%;
    margin-top: 1rem;
    text-align: center;

    .main-menu {
      padding: 0;
      border-bottom: 2px solid #fff;

      li {
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

      @media screen and (max-width: 1281px) {
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

        @media screen and (max-width: 1281px) {
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

export default Sidebar;
