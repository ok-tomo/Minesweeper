import React from 'react';
import Timer from './Timer';
import './StatusBar.css';

const StatusBar: React.VFC = () => {
    return (
        <div className="bar">
            <Timer />
        </div>
    );
};

export default StatusBar;
