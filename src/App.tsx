import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  CustomContent,
  CustomFooter,
  CustomLayout,
  CustomNavbar,
  CustomSider,
} from '@/common';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <CustomLayout
                sider={<CustomSider />}
                header={<CustomNavbar />}
                content={<CustomContent />}
                footer={<CustomFooter />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
