import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.less';

export default function header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/redux-demo">Redux Demo</Link>
        </header>
    );
};
