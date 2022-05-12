import React from 'react'
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const ProductForm = () => {

return(
    <div>
    <form>
    <Grid container spacing={1} style={{ color: "white" }}>
        <Grid item xs={12} sm={6}>
        <TextField
            sx={{ input: { color: "black", background: "white" } }}
            InputLabelProps={{ style: { color: "black" } }}
            placeholder="Product Name"
            label="Name"
            variant="filled"
            fullWidth
            required
            autoComplete="on"
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            sx={{ input: { color: "black", background: "white" } }}
            InputLabelProps={{ style: { color: "black" } }}
            placeholder="Product Description"
            label="Description"
            variant="filled"
            required
            autoComplete="on"
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            sx={{ input: { color: "black", background: "white" } }}
            InputLabelProps={{ style: { color: "black" } }}
            placeholder="Variant Type"
            label="Variant"
            variant="filled"
            required
            autoComplete="on"
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            sx={{ input: { color: "black", background: "white" } }}
            InputLabelProps={{ style: { color: "black" } }}
            placeholder="Variant Value"
            label="Value"
            variant="filled"
            required
            autoComplete="on"
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            sx={{ input: { color: "black", background: "white" } }}
            InputLabelProps={{ style: { color: "black" } }}
            placeholder="Product Quantity"
            label="Quantity"
            variant="filled"
            required
            autoComplete="on"
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            sx={{ input: { color: "black", background: "white" } }}
            InputLabelProps={{ style: { color: "black" } }}
            placeholder="Product Price"
            label="Price"
            variant="filled"
            required
            autoComplete="on"
        />
        </Grid>
    </Grid>
    </form>
    </div>
);
}
export default ProductForm