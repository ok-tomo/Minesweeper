import React, { useState } from 'react';
import { FaBomb, FaFlag } from 'react-icons/fa';
import './Square.css';

type Props = {
   status : number
}

const Square: React.VFC<Props> = ({ status }) => {
    const [isFlagged, setFlag] = useState(false);
    const [color, setColor] = useState({});
    const buiredObjects = (status === -1) ? <FaBomb /> : null;
    const handleOnContextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setFlag(!isFlagged);
    };
    const handleOnClick = () => {
        if (!isFlagged) {
            setColor({ background: 'white' });
        }
    };

    return (
        <button className="square" type="button" style={color} onClick={handleOnClick} onContextMenu={handleOnContextMenu}>
            {(isFlagged) ? <FaFlag /> : buiredObjects}
        </button>
    );
};

export default Square;
