import React, { useState, useEffect } from 'react';

const Timer: React.VFC = () => {
    let timer: any = null;
    const [time, setTime] = useState(2);
    const clear = () => {
        const nowTime: number = time - 1;
        setTime(nowTime);
        if (time === -1) { clearInterval(timer); }
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
