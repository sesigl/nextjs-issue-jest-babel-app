import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './index';

it('works with a simple page', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
});