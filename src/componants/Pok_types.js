import React from 'react';

const PokTypes = (props) => {
    let types = props.types
    return (
        <ul>
            {types.map((type) =>
                    <li key={type}>{type}</li>
            )}
        </ul>)
};

export default PokTypes;
