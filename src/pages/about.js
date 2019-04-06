import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {SectionHeader} from '../components/SectionHeader';
import {SectionContent} from '../components/SectionContent';
import styled from 'styled-components';

const calculateFont = (startFont, order) => {
  const calculatedFont = startFont - order;
  return calculatedFont > 0 ? calculatedFont : 1;
};

const Activity = styled.span`
  font-size: ${({startFont, order}) => `${calculateFont(startFont, order)}px`};
`;

const AboutPage = ({data}) => {
  const {headings} = data.allMarkdownRemark.edges[0].node;
  const title = headings.find(heading => heading.depth === 1).value;
  const activities = headings
    .filter(heading => heading.depth === 2)
    .map(heading => heading.value);

  return (
    <Layout>
      <SectionHeader>{title}</SectionHeader>

      <SectionContent>
        I'm software developer based in calm Wrocław. I like
        {activities.map((activity, i) => (
          <Activity startFont={16} order={i}>
            {` ${activity},`}
          </Activity>
        ))}
      </SectionContent>
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
