import { Global, ThemeProvider } from '@emotion/react';
import { webTheme } from './theme';
import { globalCss } from './styles/globalCss';

function App() {
  return (
    <ThemeProvider theme={webTheme}>
      <Global styles={globalCss} />
      <h1>Hello World!</h1>
    </ThemeProvider>
  );
}

export default App;
