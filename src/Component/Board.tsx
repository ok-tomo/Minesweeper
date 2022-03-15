import React from 'react';
import './Board.css';
import Square from './Square';
import mapGen from './MapGen';

type Props = {
    size: number;
    checkGameState: any;
};

const Board: React.VFC<Props> = ({ size, checkGameState }) => {
    const bombs: number = Math.floor((size * size) * (15 / 100));
    const map = mapGen(size, bombs);
    let opened: number = 0;
    let flaggedBomb: number = 0;

    // 爆弾の場所に旗が立てられている数を数える
    const countFlaggedBomb = (count: number) => {
        flaggedBomb += count;
        checkGameState(opened, flaggedBomb);
    };

    // 開かれた場所の数を数え、もし爆弾だった場合はゲームオーバーさせる
    const countOpenedSquare = (n: number) => {
        if (n !== -1) { opened += 1; }
        const isExploded = (n === -1);
        checkGameState(opened, flaggedBomb, isExploded);
    };

    // 盤の生成
    const board = map.map((item, rowIndex) => {
        const row = item.map((s: number, columnIndex) => {
            const key: string = `${rowIndex}:${columnIndex}`;
            return (
                <Square
                    key={key}
                    status={s}
                    countFlaggedBomb={(n: number) => countFlaggedBomb(n)}
                    countOpenedSquare={(n: number) => countOpenedSquare(n)}
                />
            );
        });

        const key: string = `row:${rowIndex}`;
        return <div key={key} className="row">{row}</div>;
    });

    return (
        <div className="board">
            {board}
        </div>
    );
};

export default Board;
