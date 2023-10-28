import React, {useEffect, useState} from 'react';
import MyCheckBox from "./UI/MyCheckBox";


function getListTypes(data) {
    let types = new Set()
    // console.log('---getListTypes---in--', data)
    for (let pokemon of data) {
        for (let type of pokemon.types) {
            types.add(type)
        }
    }
    // console.log('---getListTypes---out--', types)
    return [...types].sort()
}

function getListFilters(data) {
    const types = getListTypes(data)
    let categories = {}
    // console.log('---getListFilters---in--', types)
    for (let type of types) {
        categories[type] = false
    }

    // console.log('---getListFilters---out--', categories)
    return categories
}


export const Filters = ({pokemons, onFilter}) => {
    const [types, setTypes] = useState([])
    const [filters, setFilters] = useState({})

    useEffect(() => {
        setTypes(getListTypes(pokemons))
        setFilters(getListFilters(pokemons))
    }, [pokemons])


    function upgradeStatus(e) {
        let name = e.target.name
        // console.log('1--upgradeStatus--', name, filters)
        setFilters(prevState => {
            return {...prevState, [name]: !prevState[name]}
        })

        // setFilters({
        //     ...filters, [name]: !filters[name]
        // })

        // console.log('2--upgradeStatus--', filters)
        currentFilter()
    }


    function currentFilter() {
        let qqq = []
        for (let type of types) {
            if (filters[type] === true) {
                qqq.push(type)
            }
        }
        onFilter(qqq)
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
                            onChange={upgradeStatus}
                        />
                    ))}
                </div>
            </form>
        </div>
    )
};

export default Filters;
