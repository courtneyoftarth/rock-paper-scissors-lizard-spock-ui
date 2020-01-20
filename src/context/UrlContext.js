import React, { createContext, useState } from 'react';

const UrlContext = createContext([]);

export const UrlContextProvider = ({ children }) => {
    const [url, setUrl] = useState('https://codechallenge.boohma.com');

    const value = {
        setUrl,
        url
    };
    return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
};

export default UrlContext;
