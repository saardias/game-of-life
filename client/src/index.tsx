import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import App from './app/App';
import Theme from './theme/theme';
import GameProvider from './context/GameProvider';
import ApiProvider from './context/ApiProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={Theme}>
    <ApiProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </ApiProvider>
  </ThemeProvider>
);
