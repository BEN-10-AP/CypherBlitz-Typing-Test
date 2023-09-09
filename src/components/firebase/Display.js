import React from 'react'
import { useState,useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BoltOutlined, BorderLeftOutlined } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';
import { colors } from '@mui/material';




const Display = (props) => {
    const[half, setHalf] = useState(props.length)
    useEffect(()=>{
        
            console.log(half)
        
        
    },[])
    
  return (
    <>
    <div className='board-top'>
    <div class="dark fire">
		    <h2 class="Blazing" contenteditable="true">LEADERBOARD</h2>
	</div>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , padding: 20, border: 10}} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="left">Rank</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Gross WPM</TableCell>
            <TableCell align="right">Net WPM</TableCell>
            <TableCell align="right">Difficulty</TableCell>
            
          </TableRow>
        </TableHead>
        
        <TableBody>
        
          {props.data.map((row,i)=> (
            <TableRow
              key={i}
              sx={{  }}
            >
            
              <TableCell align="left">{i+1} </TableCell>
              <TableCell align="right">
                {row['Name']}
              </TableCell>
              <TableCell align="right">{row['Gross WPM']}</TableCell>
              <TableCell align="right">{row['Net WPM']}</TableCell>
              <TableCell align="right">{row['diff']}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
    </>
    
  )
  
}

export default Display