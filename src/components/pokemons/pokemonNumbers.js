function Numbers () {
  let pokemonID = Array.from({length: 151}, (_, i) => i + 1);

  return (
    <div className='num-container' >
      {pokemonID.map(num =>(
        <div className='number' key={num}>
          <h2># {num}</h2>
        </div>
      ))}
    </div>
  );
}

export default Numbers;
