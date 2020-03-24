import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({pokemons, exp, isWinner}) => {
    return (
        <div className="Pokedex">
            <h1 className={isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>{isWinner ? 'Winner!' : 'Loser'}</h1>
            <h4>Total experience: {exp}</h4>
            <div className="Pokedex-cards">
                {pokemons.map((pokemon, idx) => <Pokecard key={idx} pokemonData={pokemon} />)}
            </div>
        </div>
    )
}

export default Pokedex;