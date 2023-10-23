import React from "react";

class PokTypes extends React.Component {

    types = this.props.types

    render() {
        return (<div>
            <ul>
                    {this.props.types.map((type) => (
                            <li key={type.type.name}>{type.type.name}</li>
                        )
                    )}
            </ul>
        </div>)
    }
}

export {
    PokTypes,
}