import { useState, useEffect, useCallback } from "react";




function throttle(callback) {
  return function outer() {
    let timer;
    function inner() {
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, 700)
    }
    if (!timer) {
      inner();
    }
  }
}


export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = useCallback(function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [])

  const throttledCallback = useCallback(() => {
    return throttle(handleResize);
  }, [])



  useEffect(() => {

    window.addEventListener("resize", throttledCallback());
    handleResize();
    return () => window.removeEventListener("resize", throttledCallback());
  }, []);

  return windowSize;
}
