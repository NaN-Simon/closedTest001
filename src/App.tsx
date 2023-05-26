import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import './App.scss';

const App = () => (
  <Routes>
    <Route path="/" element={<StartPage />} />
  </Routes>
);

export default App;
