import React, { createContext, useState } from 'react';

const GameContext = createContext({
    computerMove: 4,
    onMoveSelected: () => {},
    playerMove: 2
});

export const GameContextProvider = ({ children }) => {
    const [computerMove, setComputerMove] = useState(4);
    const [playerMove, setPlayerMove] = useState(2);
    
    const onMoveSelected = id => {
        setPlayerMove(id);
    };

    const value = {
        computerMove,
        onMoveSelected,
        playerMove
    };
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContext;
