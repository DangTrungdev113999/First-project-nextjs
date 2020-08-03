import React, { useEffect } from "react";
import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";

import { Header } from "@/components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, maximum-scale=1"
        />
        <meta name="keywords" content="HTML5 Template" />
        <meta name="description" content="Cộng đồng chế ảnh ZendVN" />
        <meta name="author" content="etheme.com" />
        <title>Cộng đồng chế ảnh ZendVN</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
        />
        {/* icon */}
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="/fonts/font-awesome/css/font-awesome.css"
        />
        <link rel="stylesheet" href="/fonts/emotion/style.css" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return {
    pageProps: {
      ...appProps.pageProps,
    },
  };
};

export default MyApp;
