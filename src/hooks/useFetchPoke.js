import { useEffect, useState } from "react"
import {getPokemonData} from '../services/getPokemons'

export const useFetchPoke = () => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        getPokemonData().then( poke =>{
            setState({
                data: poke,
                loading: false
            })
        })
    }, [])

    return state;
}