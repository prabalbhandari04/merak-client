import React from 'react'
import {Typography } from '@mui/material';

const Title = ({title}) => (
    
    <Typography variant="h4" sx={{ mb: 5,  fontWeight: 'bold', textTransform: 'uppercase' }}>
        {title}
    </Typography>

)

export default Title