import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="title" >Accueil</h1>
      <LanguageSelector />
      <Link to="/contact" className="btn btn-primary">Page Contact</Link>
    </div>
  );
};

export default HomePage;
