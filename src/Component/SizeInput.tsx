import React, { useState } from 'react';
import Input from '@mui/material/Input';
import './SizeInput.css';
import { FaTimes } from 'react-icons/fa';

type Props = {
    sizeUpdate: any;
};

const SizeInput: React.VFC<Props> = ({ sizeUpdate }) => {
    const [size, setSize] = useState(10);
    const changeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue: number = Number(event.target.value);
        const maxSize: number = 25;
        const nowSize: number = size;

        if (!Number.isNaN(inputValue) && inputValue <= maxSize) {
            setSize(Number(inputValue));
            sizeUpdate(inputValue);
        } else if (inputValue > maxSize) {
            setSize(maxSize);
            sizeUpdate(maxSize);
        } else {
            setSize(nowSize);
        }
    };

    return (
        <div className="size">
            <Input
                className="sizeInput"
                placeholder="Size"
                value={size}
                onChange={(event: any) => changeSize(event)}
                inputProps={{ style: { textAlign: 'center' } }}
            />
            <div className="sizeTimes"><FaTimes /></div>
            <Input
                className="sizeInput"
                disabled
                value={size}
                inputProps={{ style: { textAlign: 'center' } }}
            />
        </div>
    );
};

export default SizeInput;
