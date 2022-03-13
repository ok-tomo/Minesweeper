import React from 'react';
import './Board.css';
import Square from './Square';
import mapGen from './MapGen';

const Board: React.VFC = () => {
    const map = mapGen(20, 50);

    const board = map.map((item) => {
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
