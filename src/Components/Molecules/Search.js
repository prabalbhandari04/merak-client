
import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredProduct = details.filter(
    product => {
      return (
        product
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        product
        .quantity
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredProdut={filteredProduct} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;