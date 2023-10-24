import React from "react";

import {Pokemon} from "./Pokemon";
import {Filters} from "./Filters";

class Pokemons extends React.Component {

    render() {
        if (this.props.pokemons.length > 0)
            return (
                <>
                <Filters pokemons={this.props.pokemons} />
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center mb-3">
                        {this.props.pokemons.map((pokemon) => (
                                <Pokemon key={pokemon.id} pokemon={pokemon}/>
                            )
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
}


export {
    Pokemons,
}