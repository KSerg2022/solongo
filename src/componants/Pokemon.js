import React from 'react';

import PokSprites from "./Pok_sprites";
import PokTypes from "./Pok_types";

const Pokemon = ({pokemon}) => {
    console.log('Pokemon - sprites', pokemon)
    return (
        <div className="col- pokemon">
            <PokSprites sprites={pokemon.sprites}/>
            <h5>{pokemon.id}. {pokemon.name}</h5>
            <PokTypes types={pokemon.types}/>
        </div>)
};

export default Pokemon;
