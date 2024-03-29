import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import logo from './assets/logo.svg';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetailpages from './pages/ProjectDetailpages'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo}/>
        <Routes>
          <Route exact path='/' element={<Profile userName='adames-ouro'/>}/>
          <Route path='/projects' element={<Projects userName='adames-ouro' />}/>
          <Route path='/projects/:name' element={<ProjectDetailpages userName='adames-ouro' />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
