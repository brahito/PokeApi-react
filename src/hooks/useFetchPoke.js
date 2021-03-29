import { useEffect, useState } from "react"
import {getPokemonData, getAllPokemonData} from '../helpers/getPokemons'

export const useFetchPoke = () => {

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        const fetchData = async() => {
            let response = await getAllPokemonData();
            await loadingPokemon(response.results);
        }
        fetchData();
    }, [])

    const loadingPokemon = async(data) =>{
        let pokemonData = await Promise.all(data.map(async pokemon =>{
            let pokemonRecord = await getPokemonData(pokemon.url);
            return pokemonRecord
        }))
        setState({
            data: pokemonData,
            loading: false
        });
    }

    return state;
}
