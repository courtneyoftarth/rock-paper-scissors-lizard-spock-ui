import React from 'react';
import { render } from '@testing-library/react';
import Credits from '../Credits';

test('Credits renders successfully', () => {
    const { container } = render(<Credits />);
    expect(container).toMatchSnapshot();
});
