import React, { createContext, useState } from 'react';
import axios from 'axios';

const GameContext = createContext({
    computerMove: 4,
    onMoveSelected: () => {},
    playerMove: 2
});

export const GameContextProvider = ({ children }) => {
    const [computerMove, setComputerMove] = useState(4);
    const [playerMove, setPlayerMove] = useState(2);
    const [results, setResults] = useState([]);
    
    const onMoveSelected = async id => {
        setPlayerMove(id);
        setComputerMove(null);
        const response = await axios.post('http://127.0.0.1:5000/play', {
            player: id
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const { computer, results: result } = response.data;
        
        results.push(result);
        if (results.length > 10) {
            setResults(results.slice(1));
        } else {
            setResults(results);
        }

        setComputerMove(computer);
    };

    const value = {
        computerMove,
        onMoveSelected,
        playerMove,
        results
    };
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContext;
