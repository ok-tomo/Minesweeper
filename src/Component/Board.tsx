import React from 'react';
import './Board.css';
import Square from './Square';
import mapGen from './MapGen';

const Board: React.VFC = () => {
    const size: number = 10;
    const bombs: number = Math.floor((size * size) * (15 / 100));
    const map = mapGen(size, bombs);
    let flaggedBomb: number = 0;
    let openedSquare: number = 0;

    // ゲームの状態を管理: [ゲームクリア, ゲームオーバー]
    const checkGameFinish = (isClickedBomb: boolean = false) => {
        if ((size * size) === (flaggedBomb + openedSquare)) {
            alert('Game Clear');
        } else if (isClickedBomb) {
            alert('Game Over');
        }
    };

    // 爆弾の場所に旗が立てられている数を数える
    const countFlaggedBomb = (count: number) => {
        flaggedBomb += count;
        checkGameFinish();
    };

    // 開かれた場所の数を数え、もし爆弾だった場合はゲームオーバーさせる
    const countOpenedSquare = (n: number) => {
        if (n !== -1) { openedSquare += 1; }
        const isClickedBomb = (n === -1);
        checkGameFinish(isClickedBomb);
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
