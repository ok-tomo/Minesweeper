import React from 'react';

let time: number = 120;
const timer = setInterval(() => { time -= 1; }, 1000);

const Timer: React.VFC = () => {
    if (time === 0) { clearInterval(timer); }

    return (
        <div className="timer">
            { time }
        </div>
    );
};

export default Timer;
