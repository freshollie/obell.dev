import React from "react";
import Head from "next/head";
import GlobalStyle from "../theme/GlobalStyle";

const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Oliver Bell - obell.dev</title>
      <meta
        name="description"
        content="Programming portfolio for Oliver Bell"
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta
        name="keywords"
        content="Oliver Bell, oliver bell, bell, 
    Ollie Bell, Oliver, Software Engineer, programmer, information, github
    freshollie"
      />
    </Head>
    {children}
  </>
);

export default Layout;
