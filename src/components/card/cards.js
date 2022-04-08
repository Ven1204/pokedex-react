import React, {useState} from 'react';
import './index.scss';


function Card({ pokemon }) {
  const [color, setColor] = useState("");

  // switch(color){
  //   case (pokemon.map(type =>{type.type[0].name === 'fire'})):
  //     style = {$fire}

  // }

  return (
    <div className='card-container'>
      <div className="card-inner">
        <div className='card-name_hp_stat'>
          <h2>{pokemon.name}</h2>
          <h3>HP:{pokemon.base_experience}</h3>
        </div>

        <div className="poke-type">
        {pokemon.types.map(type => {
            return (<p> |{type.type.name}|</p>)
          })}
        </div>

        <div className='img-outer'>
          <div className='img-inner'>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        </div>

        <div className='poke-stat'>
            <p>ID:{pokemon.id}</p>
          <div className='poke-stat-p'>
            <p>Height: {pokemon.height} ft.</p>
            <p>Weight: {pokemon.weight} lbs.</p>
          </div>
        </div>

        <div className='base-dmg'>
          <h4>Base Damage: <span>{pokemon.stats[0].base_stat}</span></h4>
        </div>

        <hr className='line' />
        <div className='ability-title'>
          <h4>Abilities:</h4>
        </div>

        <div className='poke-ability'>
          {pokemon.moves.map(move =>{
            return (
              <ul>
                <li>{move.move.name}</li>
              </ul>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Card;
