import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
