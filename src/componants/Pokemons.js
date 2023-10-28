import React, {useEffect, useState} from "react";

import Pokemon from "./Pokemon";
import Filters from "./Filters";


export const Pokemons = ({pokemons}) => {
    const [baseData, setBaseData] = useState([])
    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        setBaseData(pokemons)
        setCurrentData(pokemons)
    }, [pokemons])

    function filteredPokemons(filter = []) {
        console.log('1---filteredPokemons', filter, filter.length, currentData)
        filter.length === 0
            ? setCurrentData(pokemons)
            : setCurrentData([...baseData].filter((pokemon) => everyType(pokemon.types, filter)))
            // : filter.length === 1
            //     ? setCurrentData([...baseData].filter((pokemon) => pokemon.types.includes(...filter)))
            //     : setCurrentData([...baseData].filter((pokemon) => everyType(pokemon.types, filter)))
    }

    function everyType(types, filter) {
        return filter.every((el) => types.includes(el))
    }

    if (baseData.length > 0)
        return (
            <div>
                <Filters pokemons={baseData} onFilter={filteredPokemons}/>
                <div className="container-fluid">
                    <Pokemon pokemons={currentData}/>
                </div>
            </div>
        )
    else
        return (<div className="filters">
            <h5>There are no Pokemon.</h5>
        </div>)
}

export default Pokemons
