import React, { useRef } from 'react'
import { useState,useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addDoc } from 'firebase/firestore';
import { leaderRef } from './firebase/firebase';
import swal from 'sweetalert';
import ShowResult from './firebase/ShowResult';


const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
  
  

const Result = (props) => {
  
  const divRef=useRef(null);
  const [open, setOpen] = useState(false);
  const [submit , setsubmit]= useState(false);
  const [name, setName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);


  };

  const handleClose = () => {
    setOpen(false);
    
    if(name.length>0)
    {setsubmit(true);
      addLeader();}
    
    if(name.length==0)
    alert("Game_Name cannot be empty");

  };
    const [result, setresult] = useState(false);
    

    setInterval(()=>{
        setresult(true);
    },1000);
function leader(e){
setName(e);
  console.log(e);
}
const addLeader = async () =>{
  try{await addDoc(leaderRef,{
    "Name": name,
    "Net WPM": props.gwpm,
    "Gross WPM": props.nwpm
  });
    
swal({
  title: "You are pushed to the leaderboard",
  icon: "success",
  button: false,
  timer: 3000
})}
catch(err){
  swal({
    title: err,
    icon: "error",
    button: false,
    timer: 3000
  })
}
}
  return (
    <>
    {result==false?
    <div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>:
<>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
      <Grid item xs={0} md={1}></Grid>
        <Grid item xs={12} md={10}>
          <Item><h2>Your net word per minute is {props.nwpm} and gross word per minute is {props.gwpm}</h2></Item>
          <Grid item xs={0} md={1}></Grid>
          
                  
          
      
      <Grid item xs={3} md={4}></Grid>
      
        </Grid>
        
         
        
        
      </Grid>
   

  



  </Box>
  <div className='result'><button className="button-87" role="button" onClick={handleClickOpen}>
          Get on the leaderboard
      </button></div>
      

 




    <div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Details Required</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your Game_Name"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>{
              leader(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
    <ShowResult/>
</>}
</>
  );
}


export default Result