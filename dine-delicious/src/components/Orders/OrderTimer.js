import React, { useEffect, useState } from 'react';

const OrderTimer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h4>Time Elapsed: {time} seconds</h4>
        </div>
    );
};

export default OrderTimer;
