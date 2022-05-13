//Api chaina tesaile data match garna use gareko not necessary
import PropTypes from 'prop-types';

// Material Ui
import { Grid } from '@mui/material';
import Card from '../Molecules/Card'
// ----------------------------------------------------------------------


const CardList = ({ products, ...other }) => {
    console.log(products)

  return (
    <Grid container spacing={3} {...other} style={{marginBottom: '30px'}}>

      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <Card product={product} />
        </Grid>
      ))}

    </Grid>
  );
}

CardList.propTypes = {
    products: PropTypes.array.isRequired
  };
  

export default CardList 