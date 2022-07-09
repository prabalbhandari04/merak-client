
// @mui
import { Box } from '@mui/material';

//
import ProductCard from '../molecules/Card';

// ----------------------------------------------------------------------



const CardList = ({filteredProduct}) => {

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
      }}
    >

    {filteredProduct && filteredProduct.map((product, index) => (
            <span key={index}>
              <ProductCard product={product}/>
            </span>
          ))}
     

    </Box>
  );
}

export default CardList 
