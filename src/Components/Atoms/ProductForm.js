import React from 'react'
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const ProductForm = () => {


return(
    <div>
        <Grid>
            <form>
                <Grid container spacing={2} style={{ color: "white" }}>
                    
                    <Grid item xs={4}>
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
                </Grid>
            </form>
        </Grid>
    </div>
)
}
export default ProductForm