import React, { useState, useEffect } from 'react';

const Timer: React.VFC = () => {
    let timer: any = null;
    const [time, setTime] = useState(10);
    const clear = () => {
        if (time === 0) { clearInterval(timer); }
        setTime((prevTime) => prevTime - 1);
    };
    useEffect(() => {
        timer = setInterval(clear, 1000);
    }, []);

    return (
        <div className="timer">
            { time }
        </div>
    );
};

export default Timer;
