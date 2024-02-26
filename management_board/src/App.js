import styled, { createGlobalStyle } from 'styled-components'; // global style component for the entire app
import Board from './pages/Board/Board.js';
import Header from './components/Header/Header.js';
import Backlog from './pages/Backlog/Backlog.js';

// global style (previously in index.css), after this no css file is needed
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;


// new style component named AppWrapper, extends a div and take the CSS rule for the App class in App.css, after this We can delete the .css
const AppWrapper = styled.div`
  text-align: center; `;


function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Board />
        <Backlog />
      </AppWrapper>
    </>
  );
}

export default App;