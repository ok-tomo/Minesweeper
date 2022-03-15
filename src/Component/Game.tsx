import React from 'react';
import Board from './Board';
import './Game.css';
import StatusBar from './StatusBar';

const Game: React.VFC = () => {
    const size = 10;
    // ゲームの状態を管理: [ゲームクリア, ゲームオーバー]
    const checkGameState = (opened: number, flaggedBomb: number, isExploded: boolean = false) => {
        if ((size * size) === (opened + flaggedBomb)) {
            alert('Game Clear');
        } else if (isExploded) {
            alert('Game Over');
        }
    };

    const timeOut = () => {
        checkGameState(0, 0, true);
    };

    return (
        <div className="game">
            <StatusBar
                timeOut={() => timeOut()}
            />
            <Board
                size={size}
                checkGameState={
                    (opened: number, flaggedBomb: number, isExploded: boolean = false) => {
                        checkGameState(opened, flaggedBomb, isExploded);
                    }
                }
            />
        </div>
    );
};

export default Game;
