import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<MainLayout children="holii" />} />
      <Route path="/" element={<h1>Hola Mayra</h1>} />
    </Routes>
  );
}

export default App;
