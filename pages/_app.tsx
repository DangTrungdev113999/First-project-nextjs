import React, { useMemo } from "react";
import App, { AppContext, AppProps } from "next/app";
import Head from "next/head";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/style.css";
import { getTokenInSsrAndCsr } from "@/utils/index";
import { getUserById } from "@/modules/user/api";
import { useGlobalState } from "@/customHooks/useGlobalState";

import "antd/dist/antd.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [, setCureentUser] = useGlobalState("currentUser");
  const [, setToken] = useGlobalState("token");

  useMemo(() => {
    setCureentUser(pageProps.userInfo);
    setToken(pageProps.token);
  }, []);

  const pathname = router.pathname;
  const hiddenFooter = useMemo((): boolean => {
    const excludes = ["/", "/posts/[postId]"];
    const currentPath = pathname;
    return excludes.indexOf(currentPath) !== -1;
  }, [pathname]);

  const hiddenHeader = useMemo((): boolean => {
    const excludes = ["/login", "/register"];
    const currentPath = pathname;
    return excludes.indexOf(currentPath) !== -1;
  }, [pathname]);

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

        <link
          rel="stylesheet"
          href="/fonts/font-awesome/css/font-awesome.css"
        />
        <link rel="stylesheet" href="/fonts/emotion/style.css" />
      </Head>
      {!hiddenHeader && <Header />}
      <main>
        <Component {...pageProps} />
      </main>
      {!hiddenFooter && <Footer />}
    </div>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const [token, currentUser] = getTokenInSsrAndCsr(appContext.ctx);
  const response =
    currentUser?.id && currentUser?.email
      ? await getUserById(currentUser.id)
      : null;

  return {
    pageProps: {
      ...appProps.pageProps,
      userInfo: response?.user,
      token: token,
    },
  };
};

export default MyApp;
