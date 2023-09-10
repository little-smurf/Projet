import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import axios from 'axios'
import { useForm } from "react-hook-form";
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AlertDialog from '../Components/AlertDialog';


const Formulaire = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [pdfUrl, setPdfUrl] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  

  const handleButtonClick = () => {
    setOpenDialog(true);
  };

  const handleConfirm = () => {
    window.location.href = "http://localhost:3000/";
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };


  const handlePdfUrlChange = (event) => {
    setPdfUrl(event.target.value);
    
  };

  const handleUpload = () => {
    // Send the PDF URL to the backend for saving
    fetch('/api/upload-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pdfUrl }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Display response message from the backend
      })
      .catch((error) => {
        console.error('Error uploading PDF:', error);
      });
  };
  const onSubmit = async (data) => {
    if(data.surname ===""){
      setError("nom")
    }else if(data.name ===""){
      setError("prenom")
    }else if(data.email ==="" || !(data.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ))){
      setError("email")
    }else if(data.phone ===""){
      setError("phone")
    }else{
      const result =await axios.post("http://localhost:5000/api/admin/createClient", data)
      if(result.data.msg ==="Added"){
        window.location.href= "http://localhost:3000/formRes/"+result.data.id
      }else{
        alert("Something went wrong. Try again.")
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar/>
      <div className="m-10">
      <h1 className="font-bold font-rob text-2xl">Réclamation Client</h1>
      </div>
      <form className="border rounded-lg p-5" onSubmit={handleSubmit(onSubmit)}>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="on"
      
    >
      
      <div className="grid gap-5">
      <label htmlFor="paragraphInput">Détail de la réclamation:</label>
        {/***********************description Input*************************** */}
        {error==="nom" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          label={"Error"}
          {...register("surname")}
          helperText="Incorrect entry."
          variant="standard"
        />):( <p>
          <textarea
            id="paragraphInput"
            rows={4} // You can adjust the number of rows as needed
            cols={50} // You can adjust the number of columns as needed
            {...register("paragraph")}
          />
        </p>
         )}

          <br/>
          <br/>

          {/***********************dossier Upload Input*************************** */}
          {error==="juridique" ?(<TextField
          error
          id= {"standard-error-helper-text"}
          label={"Error"}
          {...register("juridique")}
          helperText="Incorrect entry."
          variant="standard"
        />):
      (<div>
         <input
        type="file"
        {...register("juridique")}
        value={pdfUrl}
        accept=".pdf"
        onChange={handlePdfUrlChange}
        placeholder="Enter PDF URL"
      />
      <button onClick={handleUpload} label="Insérer dossier juridique">Upload dossier juridique</button></div>)}
         <br/>
         <br/>
        
          <Stack direction="row" className="flex justify-center items-center">
          <Button variant="contained" onClick={handleButtonClick}>Enregistrer</Button>
      <AlertDialog
        open={openDialog}
        title="Confirmation"
        message="Votre réclamation a été retenue"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />          </Stack>
        
      </div>
    </Box>
        </form>
      </div>

  );
};

export default Formulaire;