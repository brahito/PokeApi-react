import React, {useState} from 'react';
import cardColor from '../helpers/pokeCardColor';
import { useFetchPoke } from '../hooks/useFetchPoke';
import { CardContent } from './CardContent';

export const Card = () => {
   
    const {data: pokemones, loading} = useFetchPoke();

    return (
        
        <div className="general-container">
            
        { loading ? <h1>Loading...</h1> :(        
            <div className="grid-container">
                {
                    pokemones.map( pok =>(
                        <CardContent
                        key = {pok.id}
                        {...pok}
                        />
                    ))
                }
            </div>
        )}
        </div>
           
    )
}

