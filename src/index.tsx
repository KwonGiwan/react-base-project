import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import styledTheme from 'style/styledTheme';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import store, { persistor } from 'modules';
import App from './App';
import 'style/global.scss';
import 'rsuite/dist/rsuite.min.css';

// React Query Client 생성
const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <StyledThemeProvider theme={styledTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </StyledThemeProvider>
  </React.StrictMode>,
);
