

import React from 'react';
import Card from './Card';

const SearchList = ({ filteredProduct }) => {


  const filtered = filteredProduct.map(product =>  <Card key={product.id} product={product} />); 

  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;