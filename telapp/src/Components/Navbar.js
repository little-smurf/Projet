import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom';
import ttlogo from "../ttlogo.png"
import { Stack } from '@mui/material';



const ResponsiveAppBar = () => {

const role=localStorage.getItem("role");

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 0 }}>
           
              <Link to="/dashboard">
                <img src={ttlogo} alt="home" className='h-auto w-auto'/>
              </Link>
            
          </Box>

          <Box className='ml-3' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography textAlign="center" >Tunisie Télécom</Typography>
          </Box>
          <Stack direction="row" spacing={3}>
          {role==="client"? 
          <div>
            <Button variant="contained" onClick={()=>window.location.href="http://localhost:3000/dashboardclient"} color="success" sx={{mr:3}}>Dossier Juridique</Button>
            
            <Button variant="contained" onClick={()=>window.location.href="http://localhost:3000/form"} color="secondary">Réclamation</Button>
            </div>
           :  <div>
           <Button variant="contained" onClick={()=>window.location.href="http://localhost:3000/dashboarddossier"} color="success" sx={{mr:3}}>Dossier Juridique</Button>
           
           <Button variant="contained" onClick={()=>window.location.href="http://localhost:3000/dashboard"} color="secondary">Réclamation</Button>
           </div>         }
          <Link to="/">
          <Button variant="contained" color="warning">Logout</Button>
          </Link>
          </Stack>
          
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
