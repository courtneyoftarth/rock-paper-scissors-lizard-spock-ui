import React, { useContext } from 'react';
import PlayContext from '../context/PlayContext';
import styled from 'styled-components';

const ScoreWrapper = styled.div`
    text-align: center;
`;

const EmphasizedText = styled.em`
    color: darkgoldenrod;
    font-weight: bold;
`;

const Score = () => {
    const { results } = useContext(PlayContext);
    const wins = results.filter(result => result === "win").length;
    const ties = results.filter(result => result === "tie").length;
    const losses = results.filter(result => result === "lose").length;
    
    const mostRecentResult = results.length > 0 && results[results.length - 1] || null;
    return (
        <ScoreWrapper>
            <h2>{mostRecentResult && `You ${mostRecentResult}!`}</h2>
            <p><EmphasizedText>{`${wins} wins, ${ties} ties, ${losses} losses`}</EmphasizedText></p>
            <p>(10 most recent rounds)</p>
        </ScoreWrapper>
    );
};

export default Score;