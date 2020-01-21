import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('App renders successfuly', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
});
