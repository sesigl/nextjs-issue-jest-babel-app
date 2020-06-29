import React from 'react'
import { render } from '@testing-library/react';
import Home from '.';
import MyApp from './_app';

it('works not with _app', async () => {

    render(<MyApp pageProps={{}} Component={Home} router={null as any} />);

});