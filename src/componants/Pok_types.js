import React from 'react';

const PokTypes = (props) => {
    let types = props.types
    return (
        <ul>
            {types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                )
            )}
        </ul>)
};

export default PokTypes;
