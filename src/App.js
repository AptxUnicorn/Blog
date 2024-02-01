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
    <div className='flex' style={boxColorCss(2)}>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;