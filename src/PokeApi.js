import React, {useState, useEffect} from 'react'
import { NavBar } from './components/NavBar'
import { getAllPokemon, getPokemon, getPokemonData, getAllPokemonData } from './helpers/getPokemons';
import {Card} from './components/Card.js'


export const PokeApi = () => {
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;

    return (
        <>

            <NavBar setSearch={setSearch}/>
            
            <div>
            <div className="btn">
                <button >Prev</button>
                <button >Next</button>
            </div>
                <Card />
            </div>
        </>
    )
}
