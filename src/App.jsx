import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          component={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
