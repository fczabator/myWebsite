import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {SectionHeader} from '../components/SectionHeader';
import {SectionContent} from '../components/SectionContent';
import styled from 'styled-components';

const calculateFont = (startFont, order) => {
  const calculatedFont = startFont - order * 2;
  return calculatedFont > 0 ? calculatedFont : 1;
};

const Activity = styled.span`
  font-size: ${({startFont, order}) => `${calculateFont(startFont, order)}px`};
`;

const AboutPage = ({data}) => {
  console.log('data: ', data);
  const {headings} = data.markdownRemark;
  const activities = headings
    .filter(heading => heading.depth === 2)
    .map(heading => heading.value);

  return (
    <Layout>
      <SectionHeader>About</SectionHeader>

      <SectionContent>
        I'm software developer based in calm Wrocław. I like
        {activities.map((activity, i) => (
          <Activity startFont={20} order={i}>
            {` ${activity},`}
          </Activity>
        ))}
      </SectionContent>
      <SectionContent>
        There's quite a lot of these. But you're here not to hear about my
        interests. Check out my resume, projects and contact me if you would
        like to work with me or just talk about coding ;)
      </SectionContent>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    markdownRemark(frontmatter: {title: {eq: "Activities"}}) {
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
`;

export default AboutPage;
