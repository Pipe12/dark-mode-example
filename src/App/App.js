import StyledApp from './StyledApp';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../utils/themes';

function App() {

  console.log(darkTheme, lightTheme);

  return (
    <ThemeProvider theme={darkTheme}>
      <StyledApp>
        <Container>
          <Header />
        </Container>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
