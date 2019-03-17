import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {SectionContent} from '../components/SectionContent';
import {SectionHeader} from '../components/SectionHeader';
import {Section} from '../components/Section';
import BackgroundImage from '../components/BackgroundImage';
import {TypistHeader} from '../components/TypistHeader';
import styled from 'styled-components';
import LeftArrow from '../assets/left-arrow.svg';

const Header = styled.div`
  margin-top: 15%;
  align-self: center;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ContinueButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 30px;
`;

const ContinueButtonText = styled.div`
  font-family: 'Courier-new', Courier, monospace;
  font-size: 20px;
  color: #000;
`;

const IndexPage = () => (
  <BackgroundImage>
    <Content>
      <Header>
        <TypistHeader
          headers={[
            'Filip Czabator',
            'software developer',
            'react & node.js enthusiast'
          ]}
        />
      </Header>
      <ContinueButton>
        <ContinueButtonText>About me</ContinueButtonText>
        <LeftArrow />
      </ContinueButton>
    </Content>
  </BackgroundImage>
);

export default IndexPage;
