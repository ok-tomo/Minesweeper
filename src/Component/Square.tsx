import React, { useState } from 'react';
import { FaBomb, FaFlag } from 'react-icons/fa';
import './Square.css';

type Props = {
   status : number
}

const Square: React.VFC<Props> = ({ status }) => {
    const [isFlag, setFlag] = useState(false);
    const [color, setColor] = useState({});
    const buiredObjects = (status === -1) ? <FaBomb /> : null;
    const handleOnContextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setFlag(!isFlag);
    };
    const handleOnClick = () => {
        if (!isFlag) {
            setColor({ background: 'white' });
        }
    };

    return (
        <button className="square" type="button" style={color} onClick={handleOnClick} onContextMenu={handleOnContextMenu}>
            {(isFlag) ? <FaFlag /> : buiredObjects}
        </button>
    );
};

export default Square;
