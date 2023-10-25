import React, {useState} from 'react';

const Filters = (props) => {
    const [listTypes, setListTypes] = useState(getListTypes)
    const [statusTypes, setStatusTypes] = useState(getStatusTypes)
    const [filters, setFilters] = useState(getTypes)

    function getListTypes() {
        let types = new Set()
        for (let pokemon of props.pokemons) {
            for (let type of pokemon.types) {
                types.add(type.type.name)
            }
        }
        return types
    }

    function getStatusTypes() {
        let status = {}
        for (let pokemon of props.pokemons) {
            for (let type of pokemon.types) {
                status[type.type.name] = false
            }
        }
        return status
    }

    function getTypes() {
        let types = []
        for (const type of listTypes.values()) {
            types.push(type)
        }
        return types.sort()
    }

    return (<div className="filters">
            <h5>Filters: </h5>
            <form>
                <div className="row justify-content-md-center">
                    {filters.map((value) => (
                        <label className="col" key={value} htmlFor={value}>
                            <input type="checkbox" id={value}
                                   checked={statusTypes[value]}
                                   onChange={(e) => {
                                       const qqq = {...statusTypes}
                                       // console.log("value--", value, statusTypes[value], statusTypes, qqq)
                                       qqq[value] = e.target.checked
                                       setStatusTypes(qqq)

                                       setStatusTypes({...statusTypes, value: e.target.checked}) // video

                                       // console.log("1onChange--", qqq)
                                       // console.log("2onChange--", value, e.target.checked, statusTypes[value], statusTypes)
                                   }}
                            /> {value}
                        </label>

                    ))}
                </div>
            </form>
        </div>
    )
};

export default Filters;

