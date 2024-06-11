import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from './store';

const LanguageSelector = () => {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleLanguageChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <div className="form-group">
      <label htmlFor="language">Langue:</label>
      <select id="language" className="form-control" value={language} onChange={handleLanguageChange}>
        <option value="fr">Français</option>
        <option value="en">Anglais</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
