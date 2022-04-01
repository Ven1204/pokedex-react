import React from 'react';
import SearchBar from '../searchBar/pokemonSearch';
import './header.scss';


function Header ({data}) {
  return(
    <div className='header-container'>
      <div className='pokemon-logo'>
        <img src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" alt="pokemon-logo" />
      </div>
      <SearchBar
        data={data}
        placeholder={'Search pokemon...'}
      />

    </div>
  );
}
export default Header;
