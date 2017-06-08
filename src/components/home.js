import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import '../styles/home.less';

export default function home() {
    return (
        <div className="home">
            <h1>React Starter Package</h1>

            <p>This is your React boilerplate. Configuration includes:</p>

            <ul>
                <li>Webpack</li>
                <li>
                    Babel
                    <ul>
                        <li>babel-preset-react</li>
                        <li>babel-preset-latest</li>
                    </ul>
                </li>
                <li>Redux</li>
                <li>React Router DOM</li>
                <li>Less</li>
                <li>CSS Autoprefixer</li>
            </ul>

            <p>This is runnning on a basic Node server using Express.</p>
        </div>
    );
};
