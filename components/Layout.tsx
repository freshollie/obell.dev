import React from "react";
import Head from "next/head";

const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Oliver Bell - ollie.codes</title>
      <meta
        name="description"
        content="Programming portfolio for Oliver Bell"
      />
      <meta
        name="keywords"
        content="Oliver Bell, oliver bell, bell, 
    Ollie Bell, Oliver, Software Engineer, programmer, information, github
    freshollie"
      />
    </Head>
    {children}
    <style jsx global>
      {`
        html {
          font-family: sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    </style>
  </>
);

export default Layout;
