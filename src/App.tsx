import { amber, deepOrange, grey } from '@mui/material/colors';
import './App.scss'

import { Sidebar } from './components/layout';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});

const darkModeTheme = createTheme(getDesignTokens('dark'));

function App() {

  return (
    <ThemeProvider theme={darkModeTheme}>
      <Sidebar />
    </ThemeProvider>
    
  )
}

export default App
