import React from 'react';
import './tailwind.css';

// Router
import { Route, Routes } from 'react-router-dom';

// Components
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Hobbies from './Pages/Hobbies';
import About from './Pages/About';


function App() {

  return (
    <div className='flex flex-col h-screen'>
      <NavBar/>
      <div className='flex flex-col flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/hobbies' element={<Hobbies />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
