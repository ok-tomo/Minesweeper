import React from 'react';
import Timer from './Timer';
import SizeInput from './SizeInput';
import './StatusBar.css';

type Props = {
    timeOut: any;
};

const StatusBar: React.VFC<Props> = ({ timeOut }) => {
    return (
        <div className="bar">
            <Timer timeOut={timeOut} />
            <SizeInput />
        </div>
    );
};

export default StatusBar;
