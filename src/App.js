
import { FunctionsSharp } from '@mui/icons-material';
import './App.css';
import { useRef } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
// import movies from './movies.json'
import React,{useState, useEffect} from 'react';
import Easy from './components/Easy';
import Medium from './components/Medium';
import Hard from './components/Hard';
//import text from './components/text.json';
//import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import Data from './components/Data';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ShowResult from './components/firebase/ShowResult';
import Footer1 from './Footer1';

function App() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const[data,setData]=useState([]);
const[x,setX]=useState(1);
  



  function addData(){
    
    

    setData([...data, {
      name: name,email: email

    }])
    setName("");
    setEmail("");
  }
  // function inc(){
  //   setNum(num+1);
  // }
  // function dec()
  // {
  //   setNum(num-1);
  // }

  const [tabvalue, setValue] = React.useState(0);
  const handleChange = (event , newValue) => {
    setValue(newValue);
  };
  useEffect(()=>{
    setInterval(()=>{
      setX(0);
    },2000)
    
  },[])
  return (
  
    
<>
    <div>
      <Header/>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={tabvalue} onChange={handleChange} centered>
        <Tab label="Easy" />
        <Tab label="Medium" />
        <Tab label="Hard" />
      </Tabs>
    </Box>
      {tabvalue==0?<><Easy/></>
:null}
      {tabvalue==1?<Medium/>:null}
      {tabvalue==2?<Hard/>:null}
      
        {x==0?<ShowResult/>:null}
        

      {<Footer1/>}
      

        
    </div>
    
    </>
  )
}

export default App;
