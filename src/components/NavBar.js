import React, { useState } from 'react'
import img from '../images/logo.png'
import PropTypes from 'prop-types'
export const NavBar = ({setSearch}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const reset = () =>{

    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setSearch( a => [ inputValue, ...a]);
            setInputValue('');
        }
    }

    return (
        <>
            <div className="nav">
                <h3>PokeApi App</h3>
                <img src={img} alt="Logo de pokemon"/>
                <button onClick={reset}>Reset</button>
            </div>
            <div className="search">
                <h3>Buscar Pokemon:</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange = {handleInputChange}
                    />
                </form>
            </div>

            {/* <div className="buttons">        
                <button onClick={reset}>Shiny</button>
                <button onClick={reset}>Default</button>
            </div> */}
        </>
    )
}

// NavBar.propTypes = {
//     setSearch: PropTypes.func.isRequired
// }