import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Footer1 = () => {
  return (<>
    <footer>
    <div className='footer-content'>
    <h3>CypherBlitz - Typing Revolutionized</h3>
    <p>A React{<JavascriptIcon/>} project by Atul Pandey</p>
    <Stack direction="row" spacing={3}>
    <a href='https://www.linkedin.com/in/atul-pandey-5b1b37203/'><LinkedInIcon/></a>
    <a href='https://github.com/BEN-10-AP'><GitHubIcon/></a>
    <a href='https://leetcode.com/gladiator_maximus/'><CodeIcon/></a>
      </Stack>
      {/* <Item></Item>
        <Item><LinkedInIcon/></Item>
        <Item><LinkedInIcon/></Item> */}
    </div>
    </footer>
    </>
  )
}

export default Footer1