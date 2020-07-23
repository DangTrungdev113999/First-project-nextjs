import React, { useRef } from "react";

type contructorCallback = () => void;

const useConstructor = (callback: contructorCallback): void => {
  const isRun = useRef(false);

  if (isRun.current === false) {
    callback();
    isRun.current = true;
  }
};

export default useConstructor;
