import React from 'react'
import {Typography } from '@mui/material';

const Subtitle = ({title}) => (
    
    <Typography variant="h5" sx={{ mb: 5,  textTransform: 'capitalize', margin: '1rem'}}>
        {title}
    </Typography>

)

export default Subtitle
