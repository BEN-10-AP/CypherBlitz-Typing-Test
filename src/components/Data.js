import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Data = (props) => {
  return (
    
    <div className='table'>
    
          <h1>{props.name}</h1>
          <h1>{props.email}</h1>
          <Button variant="outlined" color="error">
        Delete
      </Button>
      
        </div>
        
  )
}

export default Data