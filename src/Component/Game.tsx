import React from 'react';
import Board from './Board';
import './Game.css';
import StatusBar from './StatusBar';

const Game: React.VFC = () => {
    return (
        <div className="game">
            <StatusBar />
            <Board />
        </div>
    );
};

export default Game;
