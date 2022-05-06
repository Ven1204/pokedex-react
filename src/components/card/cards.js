import React, {useState} from 'react';

function Card({ pokemon }) {
  // const [type, setType] = useState("");

  // const fire = pokemon.types.map(type =>{
  //   if(type.type.name === 'fire'){
  //     console.log(type.type.name)
  //   }
  // })


const water = "conic-gradient(#0016ff, #142065, #2a42c3, #7e8fed, #1b5c90, #4952ba, #0016ff)"

// const cardInner = `${pokemon.type.type[0].name}`
//   switch (cardInner) {
//     case 'water':
//       return water
//       break;

//     default:
//       break;
//   }

  return (
      <div className='card-outer-container'>
        {/* if statement to check the type  */}

        <div className="card-inner">
          <div className='card-name_hp_stat'>
            <h2>{(pokemon.name).charAt(0).toUpperCase()+ pokemon.name.slice(1)}</h2>
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
        </div>
      </div>
  )
}
export default Card;
