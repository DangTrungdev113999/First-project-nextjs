import React, { useEffect, useState, useMemo, useCallback } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../assets/global.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="root-app">
      <Head>
        <title>Hello nextjs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
