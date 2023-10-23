import React from "react";

import {PokSprites} from "./Pok_sprites";
import {PokTypes} from "./Pok_types";

class Pokemon extends React.Component {

    pokemon = this.props.pokemon
    name = this.pokemon.name

    render() {
        return (
            <div className="col- pokemon">
            <PokSprites sprites={this.pokemon.sprites}/>

            <h5>{this.pokemon.id}. {this.name}</h5>

            <PokTypes types={this.pokemon.types} />

        </div>)
    }
}


export {
    Pokemon,
}