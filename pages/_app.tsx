import React, { useEffect, useState, useMemo, useCallback } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../assets/global.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useMemo(() => {
    console.log("constructor");
  }, []);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("didmount");
  }, []);

  const handleIncreCounte = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, [counter]);

  return (
    <div className="root-app">
      <Head>
        <title>Hello nextjs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <button onClick={handleIncreCounte}>increate counte {counter}</button>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
