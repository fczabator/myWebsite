import React from 'react';
import {TypistHeader} from './TypistHeader';
import './layout.css';
import styled, {ThemeProvider} from 'styled-components';
import {Navigation} from './Navigation';
import {theme} from '../constants/theme';

export const Content = styled.div`
  font-family: 'Courier New', Courier, monospace;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 75px;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

const Layout = ({children, headers}) => (
  <ThemeProvider theme={theme}>
    <Page>
      <Navigation />
      <Content>{children}</Content>
    </Page>
  </ThemeProvider>
);

export default Layout;
