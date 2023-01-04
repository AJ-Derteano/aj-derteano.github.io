import { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMenu,
  AiFillCloseCircle,
} from 'react-icons/ai';
import SidebarStyle from './SidebarStyle';
import { LangContext } from '../../context/LangContext';
// import { Route, Routes } from 'react-router-dom';

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
            <FormattedMessage id='sidebar.profession' defaultMessage='' />
          </span>
        </div>
        <div className='main-nav'>
          <nav className='main-nav' role='navigation'>
            <ul className='main-menu'>
              <li className={buttonActive === 'about-me' ? 'active' : ''}>
                <a
                  href='#about-me'
                  onClick={() => {
                    setButtonActive('about-me');
                  }}
                >
                  <FormattedMessage
                    id='sidebar.about-me'
                    defaultMessage='About me'
                  />
                </a>
              </li>
              <li className={buttonActive === 'skill' ? 'active' : ''}>
                <a
                  href='#skill'
                  onClick={() => {
                    setButtonActive('skill');
                  }}
                >
                  <FormattedMessage id='sidebar.skill' defaultMessage='Skill' />
                </a>
              </li>
              <li className={buttonActive === 'projects' ? 'active' : ''}>
                <a
                  href='#projects'
                  onClick={() => {
                    setButtonActive('projects');
                  }}
                >
                  <FormattedMessage
                    id='sidebar.projects'
                    defaultMessage='My projects'
                  />
                </a>
              </li>
              <li className={buttonActive === 'contact' ? 'active' : ''}>
                <a
                  href='#contact'
                  onClick={() => {
                    setButtonActive('contact');
                  }}
                >
                  <FormattedMessage
                    id='sidebar.contact'
                    defaultMessage='Contact me'
                  />
                </a>
              </li>
            </ul>
          </nav>
          {/* <Routes>
            <Route path='/about-me' element={<Test />} />
          </Routes> */}
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

export default Sidebar;
