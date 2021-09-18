import React, {useState, useEffect} from 'react'
import { NavBar } from './components/NavBar'
import {Card} from './components/Card.js'


export const PokeApi = () => {
    
    const [search, setSearch] = useState('')

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
