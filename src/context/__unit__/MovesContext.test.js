import React from 'react';
import axios from 'axios';
import { render, wait, act, waitForDomChange } from '@testing-library/react';
import MovesContext, { MovesContextProvider } from '../MovesContext';
import UrlContext from '../UrlContext';

test('requests data correctly', async () => {
    const url = "test-url";
    axios.get = jest.fn().mockResolvedValue({ data: []});

    let contextValue = null;
    render(
        <UrlContext.Provider value={{url}}>
            <MovesContextProvider>
                <MovesContext.Consumer>
                    {value => {
                        contextValue = value;
                        return JSON.stringify(value);
                    }}
                </MovesContext.Consumer>
            </MovesContextProvider>
        </UrlContext.Provider>
    );

    expect(axios.get).toBeCalledWith(`${url}/choices`);
    await wait(expect(contextValue.moves).toEqual([]));
});

test('returns correct data', async () => {
    const moves = ['tie', 'win']
    axios.get = jest.fn().mockResolvedValue({ data: moves });

    let contextValue = null;
    const { container } = render(
        <MovesContextProvider>
            <MovesContext.Consumer>
                {value => {
                    contextValue = value;
                    return JSON.stringify(value);
                }}
            </MovesContext.Consumer>
        </MovesContextProvider>
    );

    await waitForDomChange({ container });

    await wait(expect(contextValue.moves).toEqual(moves));
});

test('returns errors', async () => {
    const error = "Bad stuff!";
    axios.get = jest.fn().mockRejectedValue(error);

    let contextValue = null;
    const { container } = render(
        <MovesContextProvider>
            <MovesContext.Consumer>
                {value => {
                    contextValue = value;
                    return JSON.stringify(value);
                }}
            </MovesContext.Consumer>
        </MovesContextProvider>
    );

    await waitForDomChange({ container });

    await wait(expect(contextValue.error).toEqual(error));
});