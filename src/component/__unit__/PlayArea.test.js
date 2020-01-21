import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import PlayContext from '../../context/PlayContext';
import PlayArea from '../PlayArea';
import MovesContext from '../../context/MovesContext';

const TEST_MOVE = {
    id: 1,
    name: "test-move-1"
};

const renderWithMockContext = ({ movesContext = {}, playContext = {} }) =>
    render(
        <PlayContext.Provider value={playContext}>
            <MovesContext.Provider value={movesContext}>
                <PlayArea />
            </MovesContext.Provider>
        </PlayContext.Provider>
    );

test('renders 2 of each image button, one for player and one for computer', () => {
    const movesContext = {
        moves: [TEST_MOVE]
    };
    const { getAllByAltText } = renderWithMockContext({ movesContext });
    const images = getAllByAltText(TEST_MOVE.name);
    expect(images.length).toBe(2);
});

test('only the player image buttons are clickable', () => {
    const movesContext = {
        moves: [TEST_MOVE]
    };
    const playContext = {
        onMoveSelected: jest.fn()
    };
    const { getAllByAltText } = renderWithMockContext({ movesContext, playContext });
    const [playerButton, computerButton] = getAllByAltText(TEST_MOVE.name);

    fireEvent.click(computerButton);
    expect(playContext.onMoveSelected).not.toBeCalled();
    fireEvent.click(playerButton);
    expect(playContext.onMoveSelected).toBeCalled();
});

test('selects correct images', () => {
    const movesContext = {
        moves: [TEST_MOVE]
    };
    const playContext = {
        onMoveSelected: jest.fn()
    };
    const { getAllByAltText } = renderWithMockContext({ movesContext, playContext });
    const [playerButton] = getAllByAltText(TEST_MOVE.name);

    fireEvent.click(playerButton);
    expect(playContext.onMoveSelected).toBeCalledWith(TEST_MOVE.id);
});

test('shows an error if moves couldnt be fetched', () => {
    const movesContext = {
        error: new Error('404')
    };
    const { getByText } = renderWithMockContext({ movesContext });

    expect(getByText(/There was an error/)).toBeInTheDocument();
});

test('hides error message if there is no error', () => {
    const movesContext = {
        moves: []
    };
    const { queryByText } = renderWithMockContext({ movesContext });

    expect(queryByText(/There was an error/)).toBeNull();
});