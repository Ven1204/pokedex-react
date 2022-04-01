import React, {useState} from 'react';
import './pokemonSearch.scss';

function SearchBar ({data, placeholder}) {
    const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (event) => {
    event.preventDefault();
    const searchWord = event.target.value
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  }

  return(
    <div className='search-bar'>
      <img src="https://play-lh.googleusercontent.com/Lm_E47_hALCEU5Db8DYuCUlA_rUMQK8INkI9rFpunn_lPzpvwWDvj8g_AlSCFwZUsw=s180-rw" alt="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleFilter}
      />

      <div>

      </div>
    </div>
  );
}

export default SearchBar;
