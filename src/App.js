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

// import WallusPage from './Pages/Projects/Wallus/WallusPage';
// import CMSPage from './Pages/Projects/CMS/CMSPage';
// import BlenderPage from './Pages/Projects/Blender/BlenderPage';
// import BunnyWorldPage from './Pages/Projects/BunnyWorld/BunnyWorldPage';
// import CartaPage from './Pages/Projects/Carta/CartaPage';
// import WebProfilePage from './Pages/Projects/WebProfile/WebProfilePage';
import ProjectTemplate from './Pages/Projects/ProjectTemplate';
import HobbyTemplate from './Pages/Hobbies/HobbyTemplate';

function App() {

  return (
    <div className='flex flex-col h-screen bg-neutral-pale'>
      <NavBar/>
      <div className='flex flex-col flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/hobbies' element={<Hobbies />} />

          {/* <Route path={data.projects.wallus.url} element={<WallusPage />} />
          <Route path={data.projects.sura.url} element={<CMSPage />} />
          <Route path={data.projects.bunnyWorld.url} element={<BunnyWorldPage />} />
          <Route path={data.projects.webProfile.url} element={<WebProfilePage />} />
          <Route path={data.projects.carta.url} element={<CartaPage />} />
          <Route path={data.projects.blender.url} element={<BlenderPage />} /> */}

          <Route path='/projects/:id' element={<ProjectTemplate />} />
          <Route path='/hobbies/:id' element={<HobbyTemplate />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
