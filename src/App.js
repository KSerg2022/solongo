import React from "react";
import axios from "axios";

import {Header} from "./componants/Header";
import './css/main.css'
import {Pokemons} from "./componants/Pokemons";


const baseUrl = "https://pokeapi.co/api/v2/pokemon/"
let start = 1
let end = 151

class App extends React.Component {

    constructor(props) {
        super(props);

        for (; start < end; start++) {
            axios.get(baseUrl.concat(start)).then((res) => {
                    let allPokemons = this.state.pokemons
                    allPokemons.push(res.data)
                    this.setState({pokemons: []}, () => {
                        this.setState({pokemons: [...allPokemons]})
                    })
                }
            )
        }

        this.state = {
            pokemons: [],
        }
    }

    render() {
        return (
            <div>
                <Header title="Список покемонов"/>
                <main>
                    <Pokemons pokemons={this.state.pokemons.sort(function (a, b) {
                        return a.id - b.id
                    })}
                    />
                </main>
            </div>
        )
    }
}


export default App