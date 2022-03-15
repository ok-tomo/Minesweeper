import React from 'react';
import Timer from './Timer';
import './StatusBar.css';

type Props = {
    timeOut: any;
};

const StatusBar: React.VFC<Props> = ({ timeOut }) => {
    return (
        <div className="bar">
            <Timer timeOut={timeOut} />
        </div>
    );
};

export default StatusBar;
