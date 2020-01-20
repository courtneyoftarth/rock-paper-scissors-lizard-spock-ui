import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import UrlContext from '../context/UrlContext';

const sharedStyles = `
    padding: 10px;
`;

const Input = styled.input`
    ${sharedStyles}
    border: none;
    flex-grow: 1;
`;

const Button = styled.button`
    ${sharedStyles}
    background-color: lightgray;
    box-shadow: none;
    border: none;
    color: white;
    flex-grow: 0;
    font-weight: bold;
    width: 75px;
`;

const InputArea = styled.div`
    border: 1px solid lightgray;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding: 0;

    @media only screen and (min-width: 300px) {
        flex-direction: row;
    }
`;

const Warning = styled.p`
    color: red;
`;

const UrlPicker = () => {
    const { setUrl, url } = useContext(UrlContext);
    const [value, setValue] = useState(url);
    const showWarning = value && value.endsWith("/");
    return (
        <>
            <h2>Game service url</h2>
            <InputArea>
                <Input value={value} onChange={event => setValue(event.target.value)}/>
                <Button onClick={() => setUrl(value)}>Save</Button>
            </InputArea>
            {showWarning && <Warning>Please delete trailing slash from url</Warning>}
        </>
    );
};

export default UrlPicker;