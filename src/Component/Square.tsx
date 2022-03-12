import React, { useState } from 'react';
import { FaBomb, FaFlag } from 'react-icons/fa';
import './Square.css';

type Props = {
   status : number
}

const Square: React.VFC<Props> = ({ status }) => {
    const [isFlagged, setFlag] = useState<boolean>(false);
    const [isOpened, setOpen] = useState<boolean>(false);
    const [color, setColor] = useState<{[key: string]: string}>({});
    // 右クリック：旗トグル
    const handleOnContextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        // コンテキストメニューの非表示
        event.preventDefault();
        if (!isOpened) {
            setFlag(!isFlagged);
        }
    };
    // 左クリック：開放
    const handleOnClick = () => {
        if (!isFlagged && !isOpened) {
            setColor({ background: 'white' });
            setOpen(true);
        }
    };

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
