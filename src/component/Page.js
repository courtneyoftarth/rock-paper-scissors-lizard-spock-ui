import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Credits from './Credits';
import Score from './Score';
import PlayArea from './PlayArea';
import UrlPicker from './UrlPicker';

const PageWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
`;

const Centered = styled.div`
    text-align: center;
`;


const Page = () => (
    <PageWrapper>
        <Helmet>
          <title>RPSLS</title>
        </Helmet>
        <Centered>
            <h1>Rock Paper Scissors Lizard Spock!</h1>
            <p>Select your move, and see if you can beat the computer! (you probably can)</p>
        </Centered>
        <PlayArea />
        <Score />
        <UrlPicker />
        <Credits />
    </PageWrapper>
);

export default Page;
