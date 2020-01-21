import React from 'react';
import axios from 'axios';
import { render, waitForDomChange } from '@testing-library/react';
import PlayContext, { PlayContextProvider } from '../PlayContext';
import UrlContext from '../UrlContext';

test('posts moves correctly', async () => {
    const url = 'test-url';
    axios.post = jest.fn().mockResolvedValue({
        data: {
            computer: 1,
            results: 'tie'
        }
    });

    let contextValue = null;
    const { container } = render(
        <UrlContext.Provider value={{url}}>
            <PlayContextProvider>
                <PlayContext.Consumer>
                    {value => {
                        contextValue = value;
                        return JSON.stringify(value);
                    }}
                </PlayContext.Consumer>
            </PlayContextProvider>
        </UrlContext.Provider>
    );

    const testMoveId = 42;
    contextValue.onMoveSelected(testMoveId);
    
    await waitForDomChange({ container });

    expect(axios.post).toBeCalledWith(`${url}/play`, {
        player: testMoveId
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    expect(contextValue.computerMove).toEqual(1);
    expect(contextValue.playerMove).toEqual(testMoveId);
    expect(contextValue.results).toEqual(['tie']);
});
