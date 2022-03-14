import React, { useState, useEffect, useRef } from 'react';

let timer: any = null;

const Timer: React.VFC = () => {
    const limit: number = 120;
    const [time, setTime] = useState<number>(limit);
    const refTime = useRef(time);

    useEffect(() => {
        refTime.current = time;
        if (refTime.current <= 0) {
            clearInterval(timer);
        }
    }, [time]);

    useEffect(() => {
        timer = setInterval(() => setTime(refTime.current - 1), 1000);
    }, []);

    return (
        <div className="timer">
            { time }
        </div>
    );
};

export default Timer;
