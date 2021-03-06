import React from 'react';
import { FlexBox } from '../../global/styles';

const Error = (props) => {
    return (
        <FlexBox>
            <h2>{props.message}</h2>
        </FlexBox>
    );
};

export default Error;