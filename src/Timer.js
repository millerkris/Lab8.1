import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count]);

  return <div>{count}</div>;
};

export default Timer;