// src/components/SearchList.js

import React from 'react';
import Card from './Card';

function SearchList({ filteredProduct }) {
  const filtered = filteredProduct.map(product =>  <Card key={product.id} person={product} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;