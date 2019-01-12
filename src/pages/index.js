import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      keywords={[`filip`, `czabator`, `react`, `filipczabator`, `fczabator`]}
    />
  </Layout>
);

export default IndexPage;
