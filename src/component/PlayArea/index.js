import React, { useContext } from 'react';
import styled from 'styled-components';
import MovePicker from './MovePicker';
import GameContext from '../../context/GameContext';

const StyleWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const PlayArea = () => {
    const { computerMove, onMoveSelected, playerMove } = useContext(GameContext);
    return (
        <StyleWrapper>
            <div>
                <h2>Your move</h2>
                <MovePicker selected={playerMove} onSelect={onMoveSelected}/>
            </div>
            <div>
                <h2>Computer's move</h2>
                <MovePicker selected={computerMove} />
            </div>
        </StyleWrapper>
    )
};

export default PlayArea;