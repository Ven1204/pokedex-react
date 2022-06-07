import React, {useState} from 'react';
import styled from 'styled-components';


function Card({ pokemon }) {
  // const [type, setType] = useState("");

  const isFire = pokemon.types.map(type =>{
    if(type.type.name === 'fire'){
      console.log(pokemon.name)
    } else if(type.type.name === 'water'){
      console.log(pokemon.name)
    }
  })

  const Styledfire = styled.div`
    background: conic-gradient(#ff0000, #7c0909, #9d0000, #f04949, #d00f0f, #670d0d, #ff0000);
    height: 66vh;
    width: 46vh;
    margin: 2vh;
    position: relative;
`;


  return (
      <div className='card-outer-container'>
        {/* if statement to check the type  */}
<Styledfire>
        {/* <div className="card-inner"> */}
          <div className='card-name_hp_stat'>
            <h2>{(pokemon.name).charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <h3>HP:{pokemon.base_experience}</h3>
          </div>

          <div className="poke-type">
          {pokemon.types.map(type => {
              return (<p> |{(type.type.name).toUpperCase()}|</p>)
            })}
          </div>

          <div className='img-outer'>
            {/* if statement to check the type  */}

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
            <h4>Base Damage:</h4> <span>{pokemon.stats[0].base_stat}</span>
          </div>

          <hr className='line' />
          <div className='ability-title'>
            <h4>Abilities:</h4>
          </div>

          <div className='poke-ability'>
            {pokemon.moves.map(move => {
              return (
                <ul>
                  <li>{move.move.name}</li>
                </ul>
              )
            })}
          </div>
        {/* </div> */}
        </Styledfire>
      </div>
  )
}
export default Card;
