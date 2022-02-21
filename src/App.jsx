import { useState } from 'react';

import icons from './assets/icons.svg';
import logoReact from './assets/logo-react.svg';
import logoVite from './assets/logo-vite.svg';

import './App.css';

const links = {
  github: 'https://github.com/eternalbeginner',
  google: 'mailto:ini.dwiii@gmail.com',
  react: 'https://reactjs.org',
  vite: 'https://vitejs.dev',
};

function App() {
  const [isLoading, setIsLoading] = useState(false);

  function activateLoading() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }

  return (
    <div className="app">
      <img src={logoReact} className="app-bg" alt="react's logo" />
      <img src={logoVite} className="app-logo" alt="vite's logo" />
      <section className="app-content">
        <h1 className="app-content-title">ViteReact</h1>
        <span className="app-content-text">
          <span>A </span>
          <a href={links.react}>React</a>
          <span>-based application boilerplate built with </span>
          <a href={links.vite}>Vite</a>
        </span>
      </section>
      <section className="app-cta">
        {isLoading ? (
          <div className="app-cta-spinner" />
        ) : (
          <button
            type="button"
            className="app-button is-primary"
            onClick={activateLoading}>
            Click Me
          </button>
        )}
      </section>
      <section className="app-social">
        <a href={links.github} className="app-button is-icon">
          <svg>
            <use xlinkHref={`${icons}#logo-github`} />
          </svg>
        </a>
        <a href={links.google} className="app-button is-icon">
          <svg>
            <use xlinkHref={`${icons}#logo-google`} />
          </svg>
        </a>
      </section>
    </div>
  );
}

export default App;
