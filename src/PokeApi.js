import React, {useState, useEffect} from 'react'
import { NavBar } from './components/NavBar'
import { getAllPokemon, getPokemon, getPokemonData, getAllPokemonData } from './services/getPokemons';
import {Card} from './components/Card.js'


export const PokeApi = () => {
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;

   
    
    useEffect(() => {
        const fetchData = async() => {
            let response = await getAllPokemon(url);
            await loadingPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, [])

    const loadingPokemon = async(data) =>{
        let _pokemon = await Promise.all(data.map(async pokemon =>{
            let pokemonRecord = await getPokemon(pokemon.url);
            console.log(pokemonRecord)
            return pokemonRecord
        }))
        setPokemon(_pokemon);
        
    }

    return (
        <>

            <NavBar setSearch={setSearch}/>
            
            <div>
            <div className="btn">
                <button >Prev</button>
                <button >Next</button>
            </div>
            { loading ? <h1>Loading...</h1> :(        
                    <div className="grid-container">
                        
                        { 
                            pokemon.map(pokemon=>{
                                return <Card 
                                    key={pokemon.id} 
                                    pokemon={pokemon} 
                                />
                            })           
                        }    
                    </div>   
            )}
            </div>
        </>
    )
}
