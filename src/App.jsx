import 'normalize.css';
import { Route, Routes } from 'react-router-dom';
import { BackgroundImage, Main, Sidebar } from './components';
import {
  AboutMe,
  Attributes,
  ContactMe,
  MyProjects,
  Skills,
  NotFound,
} from './pages';

const links = [
  {
    id_text: 'sidebar.about-me',
    text: 'Sobre mi',
    name: 'about-me',
    to: '/',
    relative: 'path',
  },
  {
    id_text: 'sidebar.skills',
    text: 'Mis habilidades',
    name: 'skills',
    to: '/skills',
    relative: 'path',
  },
  {
    id_text: 'sidebar.projects',
    text: 'Mis proyectos',
    name: 'projects',
    to: '/projects',
    relative: 'path',
  },
  {
    id_text: 'sidebar.contact',
    text: 'Contactame',
    name: 'contact',
    to: '/contact-me',
    relative: 'path',
  },
  {
    id_text: 'sidebar.attributes',
    text: 'Atribuciones',
    name: 'attributes',
    to: '/attributes',
    relative: 'path',
  },
];

const App = () => {
  return (
    <BackgroundImage>
      <Sidebar links={links} />
      <Main>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<MyProjects />} />
          <Route path='/contact-me' element={<ContactMe />} />
          <Route path='/attributes' element={<Attributes />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </BackgroundImage>
  );
};

export default App;
