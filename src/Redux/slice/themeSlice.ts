// src/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeProps } from '../../types';

interface ThemeState {
  theme: ThemeProps| null;
}

const initialState: ThemeState = {
  theme: null,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState['theme']>) => {
      
      state.theme = action.payload;
    },
    clearTheme: (state) => {
      state.theme = null;
    },
  },
});



export const { setTheme, clearTheme } = themeSlice.actions;
export const selectTheme = (state: { theme: ThemeState }) => state.theme.theme ?? null;
export default themeSlice.reducer;