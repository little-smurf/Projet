import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import axios from 'axios'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const Dashboard = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const [reclamations, setReclamations] = useState([]);
  useEffect(() => {
        async function fetchData() {
        let tab=[]
        const result = await axios.get("http://localhost:5000/api/admin/getAll")
        result.data.reclamations.map((d)=>{
            tab.push({ client: d.client, paragraph: d.paragraph})
        })
        setReclamations(tab)
        }
       fetchData();

     }, [reclamations]);

     async function remove(id) {
      const result = await axios.post("http://localhost:5000/api/admin/deleteOne",{id:id})
      if(result.data.reclamations){
        setReclamations(result.data.reclamations)
      }
     }

     async function profile(id){
      window.location.href = "http://localhost:3000/profile/"+id
     }

  return (
    <div>
      <Navbar/>
      <div className="pt-8 px-8 pb-5">
       <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Client</TableCell>
            <TableCell align="left">Détail de réclamation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reclamations.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{cursor: "pointer"}}
              
            >
  
              <TableCell align="left" onClick={()=> profile(row.id)}>{row.client}</TableCell>
              <TableCell align="left" onClick={()=> profile(row.id)}>{row.paragraph}</TableCell>
              
              <TableCell align='right'>
                  <Link to={`/modify/${row.id}`}>
                    <Button variant="contained" color="warning">Modifier</Button>
                  </Link>
                  &nbsp;
                  <Button variant="outlined" color="error" onClick={()=>remove(row.id)}>Supprimer</Button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
};

export default Dashboard;