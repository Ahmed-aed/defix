import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  targetValue: number;
}

const Counter = ({ targetValue }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const counterAnimation = setInterval(() => {
      if (countRef.current) {
        const step = Math.ceil(targetValue / 50); // Adjust the step value to control animation speed
        setCount(prevCount => Math.min(prevCount + step, targetValue));
      }
    }, 20); // Adjust the interval for smoother animation

    return () => clearInterval(counterAnimation);
  }, [targetValue]);

  return <span ref={countRef}>{count}</span>;
};

export default Counter;
