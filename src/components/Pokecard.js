import React from 'react';
import './Pokecard.css';

const Pokecard = ({pokemonData}) => {
    const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    
    const imgSrc = `${POKE_API}${padToThree(pokemonData.id)}.png`
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-title">{pokemonData.name}</h3>
            <div className="Pokecard-image">
                <img src={imgSrc} alt={pokemonData.name}/>
            </div>
            <p className="Pokecard-data">Type: {pokemonData.type}</p>
            <p className="Pokecard-data">Exp: {pokemonData.base_experience}</p>
        </div>
    )
}

const padToThree = (id) => id < 100 ? `00${id}`.slice(-3) : id;

export default Pokecard;