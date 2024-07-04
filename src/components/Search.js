
import React, { useState } from "react";
// const handleSearch = (query) => {
//   setPlants(current => current.filter(plant => plant.name === query))
// }           
function Search({ handleSearch, handleSearchReset }) {
  const [query, setQuery] = useState('')
  const handleSearchValue = (e) => { 
    const value = e.target.value
    setQuery(value)
    handleSearch(value)
  }
  const searchReset = () =>{ 
    handleSearchReset() 
    setQuery('')
  }
 
  return (
    
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={query}
        placeholder="Type a name to search..."
        onChange={(handleSearchValue) }
      />
      <button onClick={searchReset}>Reset Search</button>
    </div>
  );
}

export default Search;
