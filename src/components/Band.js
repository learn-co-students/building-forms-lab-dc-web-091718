import React from 'react';

const Band = props => {
    return (
        <li>
            <h1>{props.band.name}</h1>
        </li>
    )
};

export default Band