import React from 'react';
import { render } from '@testing-library/react';
import UrlContext, { UrlContextProvider } from '../UrlContext';

test('renders the correct initial url', () => {
    const { container } = render(
        <UrlContextProvider>
            <UrlContext.Consumer>
                {({ url }) => url}
            </UrlContext.Consumer>
        </UrlContextProvider>
    );
    const url = container.innerHTML;
    expect(url).toEqual('https://codechallenge.boohma.com');
});

test('updates url correctly', () => {
    const updatedUrl = 'https://codechallenge.boohma.com/updated';
    const { container } = render(
        <UrlContextProvider>
            <UrlContext.Consumer>
                {({ setUrl, url }) => {
                    setUrl(updatedUrl);
                    return url;
                }}
            </UrlContext.Consumer>
        </UrlContextProvider>
    );
    const url = container.innerHTML;
    expect(url).toEqual(updatedUrl);
});