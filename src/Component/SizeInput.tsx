import React, { useState } from 'react';
import Input from '@mui/material/Input';
import './SizeInput.css';
import { FaTimes } from 'react-icons/fa';

const SizeInput: React.VFC = () => {
    const [size, setSize] = useState(10);
    const changeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue: number = Number(event.target.value);
        const maxSize: number = 25;

        if (!Number.isNaN(inputValue) && inputValue <= maxSize) {
            setSize(Number(inputValue));
            console.log(inputValue);
        } else if (inputValue > maxSize) {
            setSize(maxSize);
        }
    };

    return (
        <div className="size">
            <Input
                className="sizeInput"
                placeholder="Size"
                defaultValue={size}
                onChange={(event: any) => changeSize(event)}
                inputProps={{ style: { textAlign: 'center' } }}
            />
            <div className="sizeTimes"><FaTimes /></div>
            <Input className="sizeInput" disabled value={size} />
        </div>
    );
};

export default SizeInput;
