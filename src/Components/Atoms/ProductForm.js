import React from 'react'
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const ProductForm = () => {


return(
    <div>
        <Grid>
            <form>
                <Grid container spacing={2} style={{ color: "white" }}>
                    <Grid item xs={6}>
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
                    <Grid item xs={12}>
                    <TextField
                        sx={{ input: {color:"black", background: "white"}}}
                        InputLabelProps={{ style: { color: "black" } }}
                        placeholder="Product Description"
                        label="Description"
                        variant="filled"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        autoComplete="on"
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        sx={{ color: "black", background: "white"  }}
                        InputLabelProps={{ style: { color: "black" } }}
                        placeholder="Variant Type"
                        label="Variant"
                        variant="filled"
                        fullWidth
                        required
                        autoComplete="on"
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        sx={{ input: { color: "black", background: "white" } }}
                        InputLabelProps={{ style: { color: "black" } }}
                        placeholder="Variant Value"
                        label="Value"
                        variant="filled"
                        fullWidth
                        required
                        autoComplete="on"
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        sx={{ input: { color: "black", background: "white" } }}
                        InputLabelProps={{ style: { color: "black" } }}
                        placeholder="Product Quantity"
                        label="Quantity"
                        variant="filled"
                        fullWidth
                        required
                        autoComplete="on"
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        sx={{ input: { color: "black", background: "white" } }}
                        InputLabelProps={{ style: { color: "black" } }}
                        placeholder="Product Price"
                        label="Price"
                        variant="filled"
                        fullWidth
                        required
                        autoComplete="on"
                    />
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </div>
)
}
export default ProductForm
