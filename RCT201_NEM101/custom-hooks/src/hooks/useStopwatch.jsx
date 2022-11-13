import React, { useRef, useState } from 'react';

const useStopwatch = (initialValue) => {
    const [time, setTime] = useState(initialValue);
    const timerId = useRef(null);

    const start = () => {
        if (!timerId.current) {
            timerId.current = setInterval(() => {
                setTime((time) => time + 1);
            }, 200);
        }
    };

    const pause = () => {
        clearInterval(timerId.current);
        timerId.current = null;
    };

    const reset = () => {
        pause();
        setTime(0);
    };

    React.useEffect(() => {
        return reset;
    }, []);

    return { time, start, reset, pause };
};

export default useStopwatch;
