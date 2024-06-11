import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@app/App';
import { Provider } from '@app/store/Provider';

import { ThemeProvider } from '@shared/providers/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
