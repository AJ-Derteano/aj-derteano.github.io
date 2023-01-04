import 'normalize.css';
import BackgroundCover from './components/BackgroundCover/BackgroundCover';
import Main from './components/Main/Main';
import Section from './components/Section/Section';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <>
      <BackgroundCover>
        <Sidebar />
        <Main>
          <Section />
          <Section />
          <Section />
        </Main>
      </BackgroundCover>
    </>
  );
};

export default App;
