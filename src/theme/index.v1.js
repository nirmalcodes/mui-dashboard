import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// mui theme settings
const getDesignTokens = (mode) => ({
  palette: {
    mode: mode,
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};
