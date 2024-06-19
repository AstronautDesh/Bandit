import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './Components/homepage';
import Page from './Components/newbox';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/newbox"
          element={<Page />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;