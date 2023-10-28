import React from 'react';

export const PokSprites = ({sprites}) => {
    return (
        <div className="img-pokemon">
            <img src={sprites} alt="avatar" width="150" height="auto"/>
        </div>

    );
};

export default PokSprites;
