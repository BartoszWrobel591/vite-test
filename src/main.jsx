import React from 'react';
import { render } from "react-dom";
import {App} from "./App.jsx";

const done = () => {
    const root = document.getElementById('app')
    render(<App/>, root);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', done);
} else {
    done();
}
