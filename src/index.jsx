import { StrictMode } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from '@sources/App';

const GlobalStyle = createGlobalStyle`
  *, html {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    display: grid;
    place-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.03);
  }
`;

render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
