import React from 'react';

export const PokTypes = ({types}) => {
    return (
        <ul className="typesList">
            {types.map((type) =>
                <li key={type}>
                    <span className="listItem">{type}</span><
                        /li>
            )}
        </ul>)
};

export default PokTypes;
