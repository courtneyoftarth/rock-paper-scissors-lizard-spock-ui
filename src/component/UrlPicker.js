import React, { useContext } from 'react';
import styled from 'styled-components';
import UrlContext from '../context/UrlContext';

const Input = styled.input`
    padding: 5px;
    width: 300px;
`;

const UrlPicker = () => {
    const { setUrl, url } = useContext(UrlContext);

    return (
        <div>
            <h2>Game service url</h2>
            <p>
                <Input value={url}/><button>Save</button>
            </p>
        </div>
    );
};

export default UrlPicker;