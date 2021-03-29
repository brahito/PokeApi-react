import React from 'react'
import pokemonType from '../helpers/pokeColors';
import cardColor from '../helpers/pokeCardColor';


export const CardContent = ({id, name, sprites, types}) => {
    console.log(types);
    return (
        
        <div className="card" style={{backgroundColor: cardColor[types[0].type.name]}}>
            <div className="card_img">
                <img src ={sprites.other['official-artwork'].front_default} alt=""/>
            </div>
            <div className="id">
                #{id
					.toString()
					.padStart(3, '0')
                }
            </div>

            <div className="card_name">
                {name}
            </div>
            <div className="card_types" >
                {types.map(type =>{
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
        </div>
    )
}
