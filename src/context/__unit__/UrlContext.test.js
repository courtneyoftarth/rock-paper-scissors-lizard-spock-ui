import React from 'react';
import { render } from '@testing-library/react';
import UrlContext, { UrlContextProvider } from '../UrlContext';

const renderContext = () => render(
    <UrlContextProvider>
        <UrlContext.Consumer>
            {value => JSON.stringify(value)}
        </UrlContext.Consumer>
    </UrlContextProvider>
);

test('renders the correct initial state', () => {
    const { container } = renderContext();
    const { url } = JSON.parse(container.innerHTML);
    expect(url).toEqual('https://codechallenge.boohma.com');
});