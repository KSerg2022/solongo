import React from "react";

class Filters extends React.Component {

    constructor(props) {
        super(props);

        let types = new Set()
        for (let pokemon of this.props.pokemons) {
            for (let type of pokemon.types) {
                types.add(type.type.name)
            }
        }

        this.state = {
            pokemonTypes: types,
        }

        this.getTypes = this.getTypes.bind(this)
    }

    getTypes() {
        let types = []
        for (const type of this.state.pokemonTypes.values()) {
            types.push(type)
        }
        return types.sort()
    }


    render() {

        return (<div className="filters">
                <h5>Filters: </h5>
                <form>
                    <div className="row justify-content-md-center">
                        {this.getTypes().map((value) => (
                            <label className="col" key={value} htmlFor={value}>
                                <input type="checkbox" id={value}
                                    checked={this.state[value]}
                                       onChange={(e) => {
                                           this.setState({[value]: e.target.checked})
                                       }}
                                /> {value}
                            </label>

                        ))}
                    </div>
                </form>
            </div>
        )
    }

}

export {
    Filters,
}