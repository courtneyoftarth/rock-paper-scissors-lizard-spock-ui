import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import UrlContext from './UrlContext';

const MovesContext = createContext([]);

export const MovesContextProvider = ({ children }) => {
    const [moves, setMoves] = useState([]);
    const [error, setError] = useState();
    const { url } = useContext(UrlContext);

    useEffect(() => {
        (async () => {
            setError(null);
            try {
                const response = await axios.get(`${url}/choices`);
                setMoves(response.data);
            } catch (e) {
                setError(e);
            }
        })();
    }, [url]);

    const value = {
        error,
        moves
    };
    return <MovesContext.Provider value={value}>{children}</MovesContext.Provider>;
};

export default MovesContext;
