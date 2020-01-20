import React from 'react';
import styled from 'styled-components';

import rock from '../../images/rock.png';
import paper from '../../images/paper.png';
import scissors from '../../images/scissors.jpg';
import lizard from '../../images/lizard.jpg';
import spock from '../../images/spock.png';

const ButtonList = styled.ul`
    list-style-type: none;
`;

const MoveButton = styled.img`
    border-radius: 50px;
    box-shadow: ${props => props.isSelected ? 'darkgoldenrod 0px 0px 10px 1px' : ''};
    height: 10vh;
    margin: 10px;
    width: 10vh;
`;

const urls = {
    lizard,
    paper,
    rock,
    scissors,
    spock
};

const MovePicker = ({ onSelect, selected }) => {
    const options = [
        {
        "id": 1,
        "name": "rock"
        },
        {
        "id": 2,
        "name": "paper"
        },
        {
        "id": 3,
        "name": "scissors"
        },
        {
        "id": 4,
        "name": "lizard"
        },
        {
        "id": 5,
        "name": "spock"
        }
    ];

    return (
        <ButtonList>
            { options.map(({ id, name }) => <li key={id}><MoveButton src={urls[name]} isSelected={selected === id} onClick={onSelect ? () => onSelect(id) : (() => {})} /></li>)}
        </ButtonList>
    );
};

export default MovePicker;