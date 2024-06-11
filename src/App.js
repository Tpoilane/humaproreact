import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </div>
  );
};

export default App;
