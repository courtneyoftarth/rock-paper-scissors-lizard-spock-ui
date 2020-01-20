import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import UrlContext from '../context/UrlContext';

const Input = styled.input`
    padding: 5px;
    width: 150px;
`;

const UrlPicker = () => {
    const { setUrl, url } = useContext(UrlContext);
    const [value, setValue] = useState(url);

    const onClick = () => setUrl(value);
    return (
        <div>
            <h2>Game service url</h2>
            <p>
                <Input value={value} onChange={setValue}/><button onClick={onClick}>Save</button>
            </p>
        </div>
    );
};

export default UrlPicker;