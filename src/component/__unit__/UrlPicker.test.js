import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import UrlPicker from '../UrlPicker';
import UrlContext from '../../context/UrlContext';

const defaultContext = {
    setUrl: () => {}
};

const renderWithMockContext = context =>
    render(
        <UrlContext.Provider value={{...defaultContext, ...context}}>
            <UrlPicker />
        </UrlContext.Provider>
    );

test('shows warning when url ends in slash', () => {
    const url = 'https://codechallenge.boohma.com/';
    const { getByText } = renderWithMockContext({ url });
    expect(getByText(/delete trailing slash/)).toBeInTheDocument();
});

test('hides warning when url ends without slash', () => {
    const url = 'https://codechallenge.boohma.com';
    const { queryByText } = renderWithMockContext({ url });
    expect(queryByText(/delete trailing slash/)).toBeNull();
});

test('button click saves url', () => {
    const setUrl = jest.fn();
    const url = 'https://codechallenge.boohma.com/abcde';
    const { getByText } = renderWithMockContext({ setUrl, url });
    const button = getByText("Save");
    fireEvent.click(button);
    expect(setUrl).toBeCalledWith(url);
});

test('input change updates url', () => {
    const setUrl = jest.fn();
    const url = 'https://codechallenge.boohma.com/abcde';
    const { getByDisplayValue, getByText } = renderWithMockContext({ setUrl, url });
    
    const input = getByDisplayValue(url);
    const updateUrl = 'https://codechallenge.boohma.com/abcde';
    fireEvent.change(input, updateUrl);

    const button = getByText("Save");
    fireEvent.click(button);
    expect(setUrl).toBeCalledWith(url);
});