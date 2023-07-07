import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <span>
            Nous sommes le : {date.toLocaleDateString()} et il est : {date.toLocaleTimeString()}
        </span>
    );
};

export default Clock;