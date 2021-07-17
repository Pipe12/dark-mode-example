import { useState } from 'react';
import StyledApp from './StyledApp';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../utils/themes';

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <StyledApp>
        <Container>
          <Header toggleTheme={toggleTheme} theme={theme}/>
        </Container>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
