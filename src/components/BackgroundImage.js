import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({className, children}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: {eq: "background3.JPEG"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundImage = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: repeat-y;
`;

export default StyledBackgroundImage;
