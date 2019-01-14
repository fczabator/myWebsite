import React from 'react';
import {TypistHeader} from './TypistHeader';
import './layout.css';
import styled, {ThemeProvider} from 'styled-components';
import {Navigation} from './Navigation';
import {theme} from '../constants/theme';

const Content = styled.div`
  margin: 10% 21%;

  @media (max-width: 700px) {
    margin: 10% 12%;
  }
`;
const Header = styled.div`
  margin: 20px 10px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

const Layout = ({children, headers}) => (
  <ThemeProvider theme={theme}>
    <Page>
      <Header>
        <Navigation />
        <Centered>
          <TypistHeader headers={headers} />
        </Centered>
      </Header>
      <Content>{children}</Content>
    </Page>
  </ThemeProvider>
);

export default Layout;
