import React, {useState} from 'react';
import pokemonType from '../helpers/pokeColors';
import cardColor from '../helpers/pokeCardColor';

export const Card = ({pokemon}) => {
    
    return (
        
        <div className="card" style={{backgroundColor: cardColor[pokemon.types[0].type.name]}}>
            
            <div className="card_img">
                <img src ={pokemon.sprites.front_shiny} alt=""/>
            </div>
            <div className="id">
                #{pokemon.id
					.toString()
					.padStart(3, '0')
                }
            </div>

            <div className="card_name">
                {pokemon.name}
            </div>
            <div className="card_types" >
                {pokemon.types.map(type =>{
                    return(
                        <div 
                            className="card_type" 
                            style={{backgroundColor: pokemonType[type.type.name]}}
                        >
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            {/* <div className="card_info">
                <div className="card_data card_data-weight">
                    <p className="tittle">weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="card_data card_data-height">
                    <p className="tittle">height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="card_data card_data-ability">
                    <p className="tittle">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div> */}
        </div>
    );
}

