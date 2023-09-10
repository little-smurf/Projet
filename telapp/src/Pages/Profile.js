import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Navbar from "../Components/Navbar"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link, useParams} from 'react-router-dom';
import { Stack } from '@mui/material';
import axios from 'axios';

export default function FormPropsTextFields() {
    const idClient = useParams().id
    const [client, setClient] = useState({})
    console.log(client)

    useEffect(() => {
        
        async function fetchData() {
            
         const result = await axios.post("http://localhost:5000/api/admin/getClient", {id:idClient})
         console.log(result.data)
         if(result.data.client){
            setClient(result.data.client)
         }
        }
       fetchData();
     }, []);

  return (
      <div>
          <Navbar />
          
          <div className='flex flex-col justify-center items-center mt-20'>
          <h1 className='m-5 font-rob font-bold text-3xl'>Client's info</h1>
          <Box
          className='grid grid-cols-4 gap-5 border rounded-3xl p-5'
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          
          <TextField
            id="outlined-read-only-input"
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Nom"
            value={client?.surname}
            variant="standard"
            />
            <TextField
            defaultValue={client?.name}
            id="standard-read-only-input"
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Prénom"
            value={client?.name}
            variant="standard"
            />
            <TextField
            id="standard-read-only-input"
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Email"
            defaultValue={client?.email}
            value={client?.email}
            variant="standard"
            />
            <TextField
            id="standard-read-only-input"
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Téléphone"
            defaultValue={client?.phone}
            value={client?.phone}
            variant="standard"
            />
            <TextField
            id="standard-read-only-input"
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Résidence"
            defaultValue={client?.residence}
            value={client?.residence}
            variant="standard"
            />
            <TextField
            id="standard-read-only-input"
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Etage"
            defaultValue={client?.floor}
            value={client?.floor}
            variant="standard"
            />
            <TextField
            id="standard-read-only-input"
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Appartement"
            defaultValue={client?.appartement}
            value={client?.appartement}
            variant="standard"
            />
            <TextField
            id="standard-read-only-input"
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Distributeur"
            defaultValue={client?.distributeur}
            value={client?.distributeur}
            variant="standard"
            />
            <TextField
            id="standard-read-only-input"
            InputProps={{
                readOnly: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Brin"
            defaultValue={client?.brin}
            value={client?.brin}
            variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Matrice"
              defaultValue={client?.matrice}
              value={client?.matrice}
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Bloc"
              defaultValue={client?.bloc}
              value={client?.bloc}
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Joint"
              defaultValue={client?.joint}
              value={client?.joint}
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <TextField
              label="Coupleur"
              defaultValue={client?.coupleur}
              value={client?.coupleur}
              id="standard-read-only-input"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="PB"
              defaultValue={client?.PB}
              value={client?.PB}
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <Stack direction="row" className="flex justify-center items-center" spacing={1}>
            <Link to={`/modify/${idClient}`}>
                    <Button variant="contained" color="warning">Modifier</Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button variant="outlined" color="info">Retour</Button>
                  </Link>
            </Stack>
        </Box>

          </div>
      </div>
   
  );
}
