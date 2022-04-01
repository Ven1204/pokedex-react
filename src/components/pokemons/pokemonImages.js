function Images () {

  // to get the 1-151 numbers and interpolate in imageAPI
  // creates an array of numbers 1 - 151
  let pokemonID = Array.from({length: 151}, (_, i) => i + 1)

  // map through the array of numbers and interpolate them into the API
  const pokemonImage = pokemonID.map(num =>{
    return (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`);
  });

  return(
    <div className='image-container'>
      {pokemonImage.map(pokeI =>(
        <div className='image' key={pokeI}>
          <img src={pokeI} alt="asd" />
        </div>
      ))}
    </div>

  );
}

export default Images;
