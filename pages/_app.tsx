import React, { useMemo, useState } from "react";
import { Layout, Menu } from "antd";
import App, { AppContext, AppProps } from "next/app";
import Head from "next/head";
import styled from "styled-components";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { getUserById } from "@/modules/user/api";
import { getTokenInSsrAndCsr } from "@/utils/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import "@/assets/css/style.css";
import { LeftSideBar } from "@/components/SlideBar";
import { fetchCategories } from "@/modules/posts/api";
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
  margin-left: 250px;
  margin-top: 100px;
  overflow: initial;
`;

const SiderWrapper = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 1;
`;

function MyApp({ Component, pageProps, router }: AppProps) {
  const [, setToken] = useGlobalState("token");
  const [, setCureentUser] = useGlobalState("currentUser");

  // with SSR set at server (when f5 page)
  useMemo(() => {
    setCureentUser(pageProps.userInfo);
    setToken(pageProps.token);
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
    const excludes = ["/login", "/register"];
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
      <Layout>
        {!hiddenHeader && (
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
        )}
        <Layout hasSider>
          {!hideSidebar && (
            <SiderWrapper theme="light" collapsible>
              <LeftSideBar categories={pageProps.categories} />
            </SiderWrapper>
          )}
          <ContentWrapper>
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
  const currentUserRes =
    currentUser?.id && currentUser?.email
      ? await getUserById(currentUser.id)
      : null;

  const categoryRes = await fetchCategories();

  return {
    pageProps: {
      ...appProps.pageProps,
      userInfo: currentUserRes?.user,
      categories: categoryRes.categories || [],
      token: token,
    },
  };
};

export default MyApp;
