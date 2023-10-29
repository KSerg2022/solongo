import React, {useEffect, useState} from 'react';
import MyCheckBox from "./UI/MyCheckBox/MyCheckBox";


function getListTypes(data) {
    let types = new Set()
    for (let pokemon of data) {
        for (let type of pokemon.types) {
            types.add(type)
        }
    }
    return [...types].sort()
}

function getListFilters(data) {
    const types = getListTypes(data)
    let categories = {}
    for (let type of types) {
        categories[type] = false
    }
    return categories
}

export const Filters = ({pokemons, onFilter}) => {
    const [types, setTypes] = useState([])
    const [filters, setFilters] = useState({})

    useEffect(() => {
        setTypes(getListTypes(pokemons))
        setFilters(getListFilters(pokemons))
    }, [pokemons])

    useEffect(() => {
        currentFilter()
    }, [filters])


    function currentFilter() {
        let filterList = []
        for (let type of types) {
            if (filters[type] === true) {
                filterList.push(type)
            }
        }
        onFilter(filterList)
    }

    return (<div className="filters">
            <h5>Filters: </h5>
            <form>
                <div className="row justify-content-md-center">
                    {types.map((value, i) => (
                        <MyCheckBox
                            key={i}
                            type="checkbox"
                            id={value}
                            name={value}
                            onChange={e => setFilters({...filters, [e.target.name]: !filters[e.target.name]})}
                        />
                    ))}
                </div>
            </form>
        </div>
    )
};

export default Filters;
