import React from 'react';

const PokSprites = ({sprites}) => {
    // console.log('PokSprites', sprites)
    return (
        <div className="img-pokemon">
            <img src={sprites} alt="avatar" width="150" height="auto"/>
        </div>

    );
};

export default PokSprites;
