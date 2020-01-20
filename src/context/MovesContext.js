import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const MovesContext = createContext([]);

export const MovesContextProvider = ({ children }) => {
    const [moves, setMoves] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get('http://127.0.0.1:5000/choices');
            setMoves(response.data);
        })();
    }, []);

    const value = {
        moves
    };
    return <MovesContext.Provider value={value}>{children}</MovesContext.Provider>;
};

export default MovesContext;
