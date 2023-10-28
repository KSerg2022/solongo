import React, {useEffect, useState} from "react";

import Pokemon from "./Pokemon";
import Filters from "./Filters";


export const Pokemons = ({pokemons}) => {
    const [forFilter, setForFilter] = useState([])
    const [current, setCurrent] = useState([])

    useEffect(() => {
        setForFilter(pokemons)
        setCurrent(pokemons)
    }, [pokemons])

    function filteredPokemons(filter = []) {
        console.log('1---filteredPokemons', filter, filter.length, current)
        filter.length === 0
            ? setCurrent(pokemons)
            : filter.length === 1
                ? setCurrent([...forFilter].filter((pokemon) => pokemon.types.includes(...filter)))
                : setCurrent([...forFilter].filter((pokemon) => everyType(pokemon.types, filter)))
    }

    function everyType(types, filter) {
        return filter.every((el) => types.includes(el))
    }

    if (forFilter.length > 0)
        return (
            <div>
                <Filters pokemons={forFilter} onFilter={filteredPokemons}/>
                <div className="container-fluid">
                    <Pokemon pokemons={current}/>
                </div>
            </div>
        )
    else
        return (<div className="filters">
            <h5>There are no Pokemon.</h5>
        </div>)
}

export default Pokemons
