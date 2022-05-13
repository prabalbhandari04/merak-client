import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Add = () => (
    <Fab sx={{position: 'absolute', bottom: 16, right: 16}}>
        <AddIcon />
    </Fab>
)

export default Add