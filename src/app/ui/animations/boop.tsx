'use client';
import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import clsx from 'clsx';
interface Props {
  rotation: number;
  timing: number;
  children: ReactNode;
}

const Boop = ({ rotation = 0, timing = 150, children }: Props) => {
  const [isBooped, setIsBooped] = useState(false);
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
  } as CSSProperties);
  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;
