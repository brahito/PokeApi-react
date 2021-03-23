
export const getPokemon = (url)=>{
    return new Promise((resolve, reject)=>{
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
}

export const getAllPokemon = async (url) => {
    return new Promise((resolve, reject)=>{
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data);
            })
    });
}

export const getAllPokemonData = async() => {
    
    const dir = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const resp = await fetch( dir );
    const data = await resp.json();
    
    return data;
}

export const getPokemonData = async(dir) => {
    
    const resp = await fetch( dir );
    const data = await resp.json();
    
    return data;
}

