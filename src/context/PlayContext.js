import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import UrlContext from './UrlContext';

const PlayContext = createContext({
    // ID of the computer's most recent move
    computerMove: null,

    // Function that takes the ID of the player's next move, then updates the computer move and results
    onMoveSelected: () => {},

    // ID of the player's most recent move
    playerMove: null,

    // Array of up to 10 most recent round results
    results: []
});

export const PlayContextProvider = ({ children }) => {
    const [computerMove, setComputerMove] = useState();
    const [playerMove, setPlayerMove] = useState();
    const [results, setResults] = useState([]);
    const { url } = useContext(UrlContext);
    
    const onMoveSelected = async id => {
        setPlayerMove(id);
        setComputerMove(null);
        const response = await axios.post(`${url}/play`, {
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
    return <PlayContext.Provider value={value}>{children}</PlayContext.Provider>;
};

export default PlayContext;
