import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { dark } from '@mui/material/styles/createPalette';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

root.render(
  <ThemeProvider theme={darkTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
);
