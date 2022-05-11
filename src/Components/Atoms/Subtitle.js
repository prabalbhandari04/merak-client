import React from 'react'
import {Typography } from '@mui/material';

const Subtitle = ({title}) => (
    
    <Typography variant="h5" sx={{ mb: 5,  textTransform: 'capitalize' }}>
        {title}
    </Typography>

)

export default Subtitle