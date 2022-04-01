function Names ({data}) {

  return(
    <div className='name-container'>
      {data.map(pokemon => (
        <div key={pokemon.name} className="name">
          <h1>{pokemon.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Names;
