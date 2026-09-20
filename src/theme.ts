import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#111111',
    },
    success: {
      main: '#3CB371',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#111111',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", Arial, sans-serif',
  },
  shape: {
    borderRadius: 16,
  },
});