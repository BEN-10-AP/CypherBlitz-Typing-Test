import React from 'react'
import Box from '@mui/material/Box';
import { CenterFocusStrong, Flare } from '@mui/icons-material';
import TextField from '@mui/material/TextField';

const Medium = () => {

  const data='In ands as a testament to the potential of simplicity in transforming our lives. Its benefits, spanning from stress reduction to improved focus and emotional regulation, are far-reaching. As the world becomes increasingly fast-paced, carving out moments to engage in mindful breathing can be a powerful act of self-care, leading to a more balanced and mindful existence.';

  return (
    <>
    
    {/* <Box
      sx={{
        height: 300,
        padding: 5,
        margin: 10,
        marginTop: 2,
        border: 10,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      /> */}
      <Box className="textBox" sx={{backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.9, 0.9],
        },
      }}>
      <div className='textData'>{data}</div>
      </Box>
      <Box className="textBox-input"
      sx={{
       
        
      }}
    >
      <TextField
          id="fullWidth"
          
          fullWidth label="Start Typing!" 
          multiline
          rows={4}
          
          variant="standard"
        />
    </Box>
    </>
  );
    }
export default Medium