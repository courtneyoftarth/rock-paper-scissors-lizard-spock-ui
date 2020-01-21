import React from 'react';
import { render } from '@testing-library/react';
import Page from '../Page';

test('Page renders successfully', () => {
    const { getByText } = render(<Page />);
    expect(getByText(/Rock Paper Scissors Lizard Spock!/)).toBeInTheDocument();
});

