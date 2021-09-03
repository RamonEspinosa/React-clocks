import { useEffect, useRef } from "react";
import { SECOND } from "../utils/constants";
/**
 * A react hook that will execute a callback every now and then.
 * @param {function} callback - The callback to execute.
 * @param {number} delay - The span of time between each execution
 */
const useInterval = (callback, delay = SECOND) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};
export default useInterval;
