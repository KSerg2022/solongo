import React from "react";

import Pokemon from "./Pokemon";
import Filters from "./Filters";

const Pokemons = ({pokemons}) => {
    console.log('Pokemons ', pokemons)
    if (pokemons.length > 0)
        return (
            <>
                <Filters pokemons={pokemons}
                />
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center mb-3">
                        {pokemons.map(pokemon =>
                                <Pokemon key={pokemon.id} pokemon={pokemon}/>
                         )}
                    </div>
                </div>
            </>
        )
    else
        return (<div className="filters">
            <h5>There are no Pokemon.</h5>
        </div>)
}

export default Pokemons
