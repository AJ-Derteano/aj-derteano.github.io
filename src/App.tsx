import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  CustomContent,
  CustomFooter,
  CustomLayout,
  CustomNavbar,
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
