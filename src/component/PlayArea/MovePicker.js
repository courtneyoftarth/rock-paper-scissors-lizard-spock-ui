import React from 'react';
import styled from 'styled-components';
import rock from '../../images/rock.png';
import paper from '../../images/paper.png';
import scissors from '../../images/scissors.jpg';
import lizard from '../../images/lizard.jpg';
import spock from '../../images/spock.png';

const MoveButton = styled.img`
    border-radius: 50px;
    box-shadow: ${props => props.isSelected ? 'darkgoldenrod 0px 0px 10px 1px' : ''};
    height: 10vh;
    margin: 10px;
    width: 10vh;

    ${props => props.isClickable ? `
        :hover {
            box-shadow: darkgreen 0px 0px 10px 1px;
            cursor: pointer;
        }
    ` : ''}
`;

const urls = {
    lizard,
    paper,
    rock,
    scissors,
    spock
};

const MovePicker = ({ moves, onSelect, selected }) => (
    moves.map(({ id, name }) => <MoveButton src={urls[name]} alt={name} key={id} isSelected={selected === id} isClickable={!!onSelect} onClick={onSelect ? () => onSelect(id) : (() => {})} />)
);

export default MovePicker;