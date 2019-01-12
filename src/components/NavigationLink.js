import React from 'react';
import {navigate} from 'gatsby';
import styled from 'styled-components';

// const styled

export const NavigationLink = ({text, url}) => (
  <NavigationLinkContainer onClick={() => navigate(url)} />
);
