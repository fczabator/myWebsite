import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {SectionContent} from '../components/SectionContent';
import {SectionHeader} from '../components/SectionHeader';
import {Section} from '../components/Section';

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      keywords={[`filip`, `czabator`, `react`, `filipczabator`, `fczabator`]}
    />
    <Section>
      <SectionHeader>About me</SectionHeader>
      <SectionContent>
        I'm full stack developer fascinated about both web and mobile
        development. Across those 5 years of of my carreer, I've been working in
        various technologies. Starting from Python and Java. However 3 years
        ago, I was magnetised to Full stack web development - React & Node.
      </SectionContent>
    </Section>

    <Section>
      <SectionHeader>Technologies</SectionHeader>
      <SectionContent>
        React, Node, React Native, GraphQL, Express, Redux, MongoDB, SQL
      </SectionContent>
    </Section>
  </Layout>
);

export default IndexPage;
