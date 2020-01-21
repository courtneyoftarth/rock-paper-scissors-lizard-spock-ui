import React, { useContext } from 'react';
import MovePicker from './MovePicker';
import ErrorMessage from '../ErrorMessage';
import PlayContext from '../../context/PlayContext';
import MovesContext from '../../context/MovesContext';

const PlayArea = () => {
    const { computerMove, onMoveSelected, playerMove } = useContext(PlayContext);
    const { error, moves } = useContext(MovesContext);
    return error ? (
        <ErrorMessage>There was an error contacting the game service</ErrorMessage>
    ) : (
        <>
            <div>
                <h2>Your move</h2>
                <MovePicker moves={moves} selected={playerMove} onSelect={onMoveSelected}/>
            </div>
            <div>
                <h2>Computer's move</h2>
                <MovePicker moves={moves} selected={computerMove} />
            </div>
        </>
    )
};

export default PlayArea;