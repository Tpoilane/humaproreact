import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const ContactPage = () => {
  return (
    <div className="container">
      <h1 className="title" >Contact</h1>
      <LanguageSelector />
      <Link to="/" className="btn btn-primary">Page Accueil</Link>
    </div>
  );
};

export default ContactPage;
