import React from 'react';
import './tailwind.css';

// Router
import { Route, Routes } from 'react-router-dom';

// Components
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Dance from './Pages/Dance';
import About from './Pages/About';


function App() {

  return (
    <>
      <NavBar/>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/dance' element={<Dance />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
