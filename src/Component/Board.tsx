import React from 'react';
import './Board.css';
import Square from './Square';

const boardSize: string[] = Array(20).fill('00000000000000000000');

const board = boardSize.map((item) => {
    const row = item.split('').map((s) => {
        return <Square status={Number(s)} />;
    });

    return (
        <div className="row">
            {row}
        </div>
    );
});

const Board: React.VFC = () => {
    return (
        <div className="board">
            {board}
        </div>
    );
};

export default Board;
