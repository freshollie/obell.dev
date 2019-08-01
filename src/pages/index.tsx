import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Profile from "../components/Profile/Profile";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Profile />
  </Layout>
);

export default IndexPage;
