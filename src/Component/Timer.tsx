import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

let timer: any = null;

type Props = {
    timeOut: any;
};

const Timer: React.VFC<Props> = ({ timeOut }) => {
    const limit: number = 120;
    const [time, setTime] = useState<number>(limit);
    const refTime = useRef(time);

    useEffect(() => {
        refTime.current = time;
        if (refTime.current <= 0) {
            clearInterval(timer);
            timeOut();
        }
    }, [time]);

    useEffect(() => {
        timer = setInterval(() => setTime(refTime.current - 1), 1000);
    }, []);

    const minuts = Math.floor(time / 60);
    const seconds = time - (minuts * 60);
    const displayTime = (seconds >= 10) ? `${minuts}:${seconds}` : `${minuts}:0${seconds}`;

    return (
        <div className="timer">
            { displayTime }
        </div>
    );
};

export default Timer;
