import 'normalize.css';
import { Route, Routes } from 'react-router-dom';
import { BackgroundImage, Main, Sidebar } from './components';
import { AboutMe, Attributes, ContactMe, MyProjects, Skill } from './pages';

const App = () => {
  return (
    <BackgroundImage>
      <Sidebar />
      <Main>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/projects' element={<MyProjects />} />
          <Route path='/contact-me' element={<ContactMe />} />
          <Route path='/attributes' element={<Attributes />} />
        </Routes>
      </Main>
    </BackgroundImage>
  );
};

export default App;
