import React from 'react';
import './Board.css';
import Square from './Square';
import mapGen from './MapGen';

const Board: React.VFC = () => {
    const boardSize: number = 20;
    const boardData: number[][] = Array(boardSize).fill([
        -1, 1, 2, 3, 4, 5, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    const map = mapGen(20, 1);
    console.log(map);

    const board = boardData.map((item) => {
        const row = item.map((s: number) => <Square status={s} />);

        return <div className="row">{row}</div>;
    });

    return (
        <div className="board">
            {board}
        </div>
    );
};

export default Board;
