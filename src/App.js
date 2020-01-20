import React from 'react';
import { PlayContextProvider } from './context/PlayContext';
import { MovesContextProvider } from './context/MovesContext';
import { UrlContextProvider } from './context/UrlContext';
import Page from './component/Page';

function App() {
  return (
    <div className="App">
      <UrlContextProvider>
        <MovesContextProvider>
          <PlayContextProvider>
            <Page />
          </PlayContextProvider>
        </MovesContextProvider>
      </UrlContextProvider>
    </div>
  );
}

export default App;
