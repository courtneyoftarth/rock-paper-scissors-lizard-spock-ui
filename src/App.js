import React from 'react';
import { GameContextProvider } from './context/GameContext';
import Page from './component/Page';


function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <Page />
      </GameContextProvider>
    </div>
  );
}

export default App;
