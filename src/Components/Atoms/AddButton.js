import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  

const Add = () => (
    <Fab color="primary" aria-label="add" sx={{fabStyle}}>
        <AddIcon />
    </Fab>
)

export default Add