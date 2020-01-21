import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import UrlContext from './UrlContext';

const MovesContext = createContext([]);

export const MovesContextProvider = ({ children }) => {
    const [moves, setMoves] = useState([]);
    const { url } = useContext(UrlContext);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`${url}/choices`);
            setMoves(response.data);
        })();
    }, [url]);

    const value = {
        moves
    };
    return <MovesContext.Provider value={value}>{children}</MovesContext.Provider>;
};

export default MovesContext;
