import React, {useEffect, useState} from 'react';
import axios from "axios";

import './css/main.css'
import Header from "./componants/Header";
import Pokemons from "./componants/Pokemons";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"
let start = 1
let end = 56

export const App = () => {
    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        setPokemons(prevState => prevState=[])
        for (; start < end; start++) {
            axios.get(baseUrl.concat(start)).then((res) => {
                let data = {
                    id: res.data.id,
                    name: res.data.name,
                    img_url: res.data.sprites.other.home.front_default,
                    types: res.data.types.map(el => el.type.name)
                }
                setPokemons(prevState => [...prevState, data])
            })
        }
    }, [])

    const sortedPokemons = () => {
        return pokemons.sort(function (a, b) {
            return a.id - b.id
        })
    }

    return (
        <div>
            <Header title="Pokemon's list."/>
            <main>
                <Pokemons pokemons={sortedPokemons} />
            </main>
        </div>
    );
};

export default App;