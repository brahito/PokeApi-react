
export const getAllPokemonData = async() => {
    
    const dir = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const resp = await fetch( dir );
    const data = await resp.json();
    
    return await data;
}

export const getPokemonData = async (dir) => {

    const resp = await fetch( dir );
    const data = await resp.json();
    
    return await data;
}

