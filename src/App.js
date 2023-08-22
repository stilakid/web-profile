import React from 'react';
import './tailwind.css';

// Router
import { Route, Routes } from 'react-router-dom';

// Components
import NavBar from './Components/NavBar';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import Hobbies from './Pages/Hobbies/Hobbies';

import WallusPage from './Pages/Projects/Wallus/WallusPage';
import CMSPage from './Pages/Projects/CMS/CMSPage';
import BlenderPage from './Pages/Projects/Blender/BlenderPage';
import BunnyWorldPage from './Pages/Projects/BunnyWorld/BunnyWorldPage';
import CartaPage from './Pages/Projects/Carta/CartaPage';
import WebProfilePage from './Pages/Projects/WebProfile/WebProfilePage';

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

          <Route path='/projects/wallus' element={<WallusPage />} />
          <Route path='/projects/cms' element={<CMSPage />} />
          <Route path='/projects/bunnyworld' element={<BunnyWorldPage />} />
          <Route path='/projects/webprofile' element={<WebProfilePage />} />
          <Route path='/projects/carta' element={<CartaPage />} />
          <Route path='/projects/blender' element={<BlenderPage />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
