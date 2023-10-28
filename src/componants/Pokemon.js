import React, {useEffect, useState} from 'react';

import PokSprites from "./Pok_sprites";
import PokTypes from "./Pok_types";


export const Pokemon = ({pokemons}) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(pokemons)
    }, [pokemons])

    if (!pokemons) {
        return (<h1>Loading....</h1>)
    }

    return (
        <div className="row d-flex justify-content-center mb-3">
            {cards?.map(pokemon =>
                <div className="col- pokemon" key={pokemon.id}>
                    <PokSprites sprites={pokemon.img_url}/>
                    <h5>{pokemon.id}. {pokemon.name}</h5>
                    <PokTypes types={pokemon.types}/>
                </div>
            )
            }
        </div>
    )
};

export default Pokemon;
