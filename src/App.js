import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Photos from './pages/Photos';
import Context from './components/Context';
import { useContext } from 'react';

const App = () => {

  const { theme } = useContext(Context);

  const boxColorCss = (index) => {
    return {
      backgroundColor: theme[index].color,
    };
  }

  return (
    <div>
      <div className='flex' style={boxColorCss(2)}>
        <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route path="/Blog/Mainpage" element={<HomePage />} />
              <Route path="/Blog/about" element={<About />} />
              <Route path="/Blog/gallery" element={<Photos />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;