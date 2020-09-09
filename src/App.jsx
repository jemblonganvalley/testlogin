import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import SideNavbar from './components/sideNavbar/SideNavbar';

function App() {

  return (
    
    <div className="App">
      <SideNavbar />

    </div>
  );
}

export default App;
