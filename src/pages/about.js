import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {SectionHeader} from '../components/SectionHeader';
import {SectionContent} from '../components/SectionContent';

const AboutPage = ({data}) => {
  console.log('data: ', data);
  const {headings} = data.allMarkdownRemark.edges[0].node;
  const title = headings.find(heading => heading.depth === 1).value;
  return (
    <Layout>
      <SectionHeader>{title}</SectionHeader>
      <SectionContent>apsdjaisdjoaisjdo aosjdasoijd </SectionContent>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          headings {
            value
            depth
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default AboutPage;
