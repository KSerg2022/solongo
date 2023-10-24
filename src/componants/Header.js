import React from "react";

class Header extends React.Component {
    render() {
        return (
            <h1 className="header">
                {this.props.title}
            </h1>
        )
    }
}


export {
    Header,
}