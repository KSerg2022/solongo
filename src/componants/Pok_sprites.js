import React from "react";

class PokSprites extends React.Component {

    sprites = this.props.sprites
    render() {
        return (<div className="img-pokemon">
            <img src={this.sprites.other.home.front_default} alt="avatar" width="150" height="auto"/>
        </div>)
    }
}


export {
    PokSprites,
}