import React, {useEffect, useState} from 'react';

import PokSprites from "./PokSprites";
import PokTypes from "./PokTypes";
import PolName from "./PolName";


export const Pokemon = ({pokemons}) => {
    const [cardsPokemon, setCardsPokemon] = useState([])

    useEffect(() => {
        setCardsPokemon(pokemons)
    }, [pokemons])

    if (!pokemons) {
        return (<h1>Loading....</h1>)
    }

    return (
        <div className="row d-flex justify-content-center mb-3">
            {cardsPokemon?.map(pokemon =>
                <div className="col- pokemon" key={pokemon.id}>
                    <PokSprites sprites={pokemon.img_url}/>
                    <PolName id={pokemon.id} name={pokemon.name} />
                    <PokTypes types={pokemon.types}/>
                </div>
            )
            }
        </div>
    )
};

export default Pokemon;
