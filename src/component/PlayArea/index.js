import React, { useContext } from 'react';
import MovePicker from './MovePicker';
import PlayContext from '../../context/PlayContext';

const PlayArea = () => {
    const { computerMove, onMoveSelected, playerMove } = useContext(PlayContext);
    return (
        <>
            <div>
                <h2>Your move</h2>
                <MovePicker selected={playerMove} onSelect={onMoveSelected}/>
            </div>
            <div>
                <h2>Computer's move</h2>
                <MovePicker selected={computerMove} />
            </div>
        </>
    )
};

export default PlayArea;