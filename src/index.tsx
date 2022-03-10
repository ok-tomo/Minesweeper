import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Component/Header';
import Game from './Component/Game';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Game />
    </React.StrictMode>,
    document.getElementById('root'),
);
