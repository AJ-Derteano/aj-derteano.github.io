import 'normalize.css';
import { Route, Routes } from 'react-router-dom';
import { Footer, NavBar, SiderBar } from './components';
import CustomLayout from './components/CustomLayout';
import { AboutMe, NotFound } from './pages';

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
    <CustomLayout
      siderBar={<SiderBar />}
      header={<NavBar />}
      footer={<Footer />}
      content={
        <Routes>
          <Route exact path='/' element={<AboutMe />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      }
    />
  );
};

export default App;
