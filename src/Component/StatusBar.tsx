import React from 'react';
import Timer from './Timer';
import SizeInput from './SizeInput';
import './StatusBar.css';

type Props = {
    timeOut: any;
    sizeUpdate: any;
};

const StatusBar: React.VFC<Props> = ({ timeOut, sizeUpdate }) => {
    return (
        <div className="bar">
            <Timer timeOut={timeOut} />
            <SizeInput sizeUpdate={sizeUpdate} />
        </div>
    );
};

export default StatusBar;
