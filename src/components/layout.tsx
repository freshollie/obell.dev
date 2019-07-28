/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        <main>{children}</main>
        <footer>
          {`© ${new Date().getFullYear()} Oliver Bell - Built with `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` - `}
          <a href="https://www.github.com/freshollie/ollie.codes">Sourcecode</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
