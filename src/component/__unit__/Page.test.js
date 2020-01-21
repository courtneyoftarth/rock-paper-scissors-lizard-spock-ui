import React from 'react';
import { render } from '@testing-library/react';
import Page from '../Page';

jest.mock('../Credits', () => 'Credits');
jest.mock('../Score', () => 'Score');
jest.mock('../PlayArea', () => 'PlayArea');
jest.mock('../UrlPicker', () => 'UrlPicker');

test('Page renders successfully', () => {
    const { getByText } = render(<Page />);
    expect(getByText(/Rock Paper Scissors Lizard Spock!/)).toBeInTheDocument();
});

