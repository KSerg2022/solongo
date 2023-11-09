import React, {useEffect, useState} from 'react';

import CardPokemon from "./CardPokemon";


export const Pokemon = ({pokemons}) => {
    const [cardsPokemon, setCardsPokemon] = useState([])

    useEffect(() => {
        setCardsPokemon(pokemons)
    }, [pokemons])

    return (
        <div className="row d-flex justify-content-center mb-3">
            {cardsPokemon?.map(pokemon =>
                <CardPokemon
                    key={pokemon.id}
                    sprites={pokemon.img_url}
                    id={pokemon.id}
                    name={pokemon.name}
                    types={pokemon.types}
                />
            )
            }
        </div>
    )
};

export default Pokemon;
