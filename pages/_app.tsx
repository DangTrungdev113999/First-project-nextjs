import React, { useMemo, useEffect } from "react";
import { Layout } from "antd";
import App, { AppContext, AppProps } from "next/app";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import NProgress from "nprogress";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { getUserById } from "@/modules/user/api";
import { getTokenInSsrAndCsr } from "@/utils/index";

import { fetchCategories } from "@/modules/posts/api";
import { LeftSideBar } from "@/components/SlideBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "nprogress/nprogress.css";
import "antd/dist/antd.css";

import "@/assets/css/style.css";
const { Header: HeaderAnt, Content, Footer: FooterWrapper, Sider } = Layout;

const HeaderWrapper = styled(HeaderAnt)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 5px lightgray;
  z-index: 2;
`;

const ContentWrapper = styled(Content)`
  width: 1200px;
  max-width: 100%;
  //@ts-ignore
  margin: ${({ hasSider }) => (!hasSider ? "0 0 0 350px" : "0 auto")};
  margin-top: 100px;
  overflow: initial;
`;

const SiderWrapper = styled(Sider)`
  width: 400px !important;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  left: 0;
  z-index: 1;
  &:hover {
    overflow: auto;
  }
`;

function MyApp({ Component, pageProps, router }: AppProps) {
  const [, setToken] = useGlobalState("token");
  const [, setCureentUser] = useGlobalState("currentUser");
  const [, setCategories] = useGlobalState("categories");
  const [mode, setMode] = useGlobalState("mode");

  // with SSR set at server (when f5 page)
  useMemo(() => {
    setCureentUser(pageProps.userInfo);
    setCategories(pageProps.categories);
    setToken(pageProps.token);
    setMode(pageProps.mode);
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
  }, []);

  const currentPath = router.pathname;

  const hiddenFooter = useMemo((): boolean => {
    const excludes = ["/", "/posts/[postId]"];
    return excludes.indexOf(currentPath) !== -1;
  }, [currentPath]);

  const hiddenHeader = useMemo((): boolean => {
    const excludes = ["/login", "/register"];
    return excludes.indexOf(currentPath) !== -1;
  }, [currentPath]);

  const hideSidebar = useMemo((): boolean => {
    const excludes = [
      "/login",
      "/register",
      "/users/profile",
      "/posts/create",
      "/posts/[postId]",
      "/users/[userId]",
      "/users/changePassword",
    ];
    return excludes.indexOf(currentPath) !== -1;
  }, [currentPath]);

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
        <meta name="description" content="Cộng đồng chế ảnh" />
        <meta name="author" content="etheme.com" />
        <title>Cộng đồng chế ảnh </title>
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
      <Layout>
        {!hiddenHeader && (
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
        )}
        <Layout>
          {!hideSidebar && (
            <SiderWrapper theme={mode} width={300}>
              <LeftSideBar />
            </SiderWrapper>
          )}
          <ContentWrapper hasSider={hideSidebar}>
            <Component {...pageProps} />
          </ContentWrapper>
        </Layout>
        {!hiddenFooter && (
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        )}
      </Layout>
    </div>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  // login With SSR
  const [token, currentUser] = getTokenInSsrAndCsr(appContext.ctx);
  const currentUserPr =
    currentUser?.id && currentUser?.email ? getUserById(currentUser.id) : null;

  const categoryPr = fetchCategories();

  const [currentUserRes, categoryRes] = await Promise.all([
    currentUserPr,
    categoryPr,
  ]);

  return {
    pageProps: {
      ...appProps.pageProps,
      userInfo: currentUserRes?.user,
      categories: categoryRes.categories || [],
      token: token,
      mode: "light",
    },
  };
};

export default MyApp;
