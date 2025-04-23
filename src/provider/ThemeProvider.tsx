import { ThemeProvider } from '@mui/material';
import React from 'react';
import {ClaroTheme} from '../theme'

const ClaroThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={ClaroTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ClaroThemeProvider;