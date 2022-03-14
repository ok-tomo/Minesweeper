import React, { useState } from 'react';
import { FaBomb, FaFlag } from 'react-icons/fa';
import './Square.css';

type Props = {
   status : number
   countFlaggedBomb: any
   countOpenedSquare: any
}

const Square: React.VFC<Props> = ({ status, countFlaggedBomb, countOpenedSquare }) => {
    const [isFlagged, setFlag] = useState<boolean>(false);
    const [isOpened, setOpen] = useState<boolean>(false);
    const [color, setColor] = useState<{[key: string]: string}>({});
    // 右クリック：旗トグル
    const handleOnContextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        // コンテキストメニューの非表示
        event.preventDefault();
        if (!isOpened) {
            const flag = !isFlagged;
            if (flag && (status === -1)) {
                countFlaggedBomb(1);
            } else if (!flag && status === -1) { countFlaggedBomb(-1); }

            setFlag(flag);
        }
    };
    // 左クリック：開放
    const handleOnClick = () => {
        if (!isFlagged && !isOpened) {
            countOpenedSquare(status);
            setColor({ background: 'white' });
            setOpen(true);
        }
    };
    // 表示オブジェクトの選択
    const buiredObj = () => {
        if (isFlagged) { return <FaFlag color="red" />; }
        if (isOpened) {
            if (status > 0) { return status; }
            if (status === -1) { return <FaBomb />; }
        }

        return null;
    };

    return (
        <button className="square" type="button" style={color} onClick={handleOnClick} onContextMenu={handleOnContextMenu}>
            { buiredObj() }
        </button>
    );
};

export default Square;
