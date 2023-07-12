import React from 'react';
import withLama, { HelloWorld } from "./components/HelloWorld.jsx";


const Lama = withLama(HelloWorld, 'Lama')

export const App = () => {
    return (<div>App<Lama/></div>)
}