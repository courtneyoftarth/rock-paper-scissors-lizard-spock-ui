import React from 'react';
import { render } from '@testing-library/react';
import Score from '../Score';
import PlayContext from '../../context/PlayContext';

const defaultContext = {
    results: []
};

const renderWithMockContext = context =>
    render(
        <PlayContext.Provider value={{...defaultContext, ...context}}>
            <Score />
        </PlayContext.Provider>
    );

test('shows correct wins', () => {
    const results = ['win', 'tie', 'win'];
    const { getByText } = renderWithMockContext({ results });
    expect(getByText(/2 wins/)).toBeInTheDocument();
});

test('shows correct ties', () => {
    const results = ['lose', 'tie', 'win'];
    const { getByText } = renderWithMockContext({ results });
    expect(getByText(/1 ties/)).toBeInTheDocument();
});

test('shows correct losses', () => {
    const results = ['lose', 'lose', 'lose', 'win'];
    const { getByText } = renderWithMockContext({ results });
    expect(getByText(/3 losses/)).toBeInTheDocument();
});

test('shows correct most recent result', () => {
    const results = ['lose', 'win', 'tie'];
    const { getByText } = renderWithMockContext({ results });
    expect(getByText(/You tie/)).toBeInTheDocument();
});

test('hides most recent result when none has happened yet', () => {
    const { queryByText } = renderWithMockContext({ results: [] });
    expect(queryByText(/You/)).toBeNull(); 
});
