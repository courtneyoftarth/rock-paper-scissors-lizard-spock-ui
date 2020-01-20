import React from 'react';
import { PlayContextProvider } from './context/PlayContext';
import { MovesContextProvider } from './context/MovesContext';
import Page from './component/Page';

function App() {
  return (
    <div className="App">
      <MovesContextProvider>
        <PlayContextProvider>
          <Page />
        </PlayContextProvider>
      </MovesContextProvider>
    </div>
  );
}

export default App;
