import { configureStore, createSlice } from '@reduxjs/toolkit';

// Créez un slice pour le sélecteur de langue
const languageSlice = createSlice({
  name: 'language',
  initialState: 'fr',
  reducers: {
    setLanguage: (state, action) => action.payload
  }
});

export const { setLanguage } = languageSlice.actions;

const store = configureStore({
  reducer: {
    language: languageSlice.reducer
  }
});

export default store;
