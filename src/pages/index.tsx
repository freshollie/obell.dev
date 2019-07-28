import React, { ReactNode } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Oliver Bell - Portfolio" />
    <h1>Hi, I'm Oliver</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image imgName="something" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
