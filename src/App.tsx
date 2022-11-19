import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { PageHome } from './pages/PageHome/PageHome';
import { PageUser } from './pages/PageUser/PageUser';

const App = () => {

return(
  <Router>
    <Routes>
      <Route path="/" element={<PageHome/>}/>
      <Route path="/user" element={<PageUser/>}/>
    </Routes>
</Router>
)
};

export default App;
