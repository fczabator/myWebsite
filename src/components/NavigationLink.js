import React from 'react';
import {navigate} from 'gatsby';
import styled from 'styled-components';

const Link = styled.div`
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export const NavigationLink = ({text, url}) => (
  <Link onClick={() => navigate(url)}>{text}</Link>
);
