import React from "react";

class Filters extends React.Component {

    constructor(props) {
        super(props);

        let pokemonsTypes = new Set()
        for (let pokemon of this.props.pokemons) {
            for (let type of pokemon.types) {
                pokemonsTypes.add(type.type.name)

                this.state = {[type.type.name]: true}
                console.log(this.state, this.state[type.type.name])
            }
        }

        this.state = {
            pokemonTypes: pokemonsTypes,
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
                <p>Фильтры: </p>
                <form>
                    <div className="row justify-content-md-center">
                        {this.getTypes().map((value) => (
                            <label className="col" key={value} htmlFor={value}>
                                <input type="checkbox" id={value}
                                    checked={this.state[value]}
                                       onChange={(e) => {
                                           // const val = e.target.checked;
                                           console.log(value, e.target.checked)
                                           this.setState({[value]: e.target.checked})
                                           console.log(this.state.grass, this.state[value])
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