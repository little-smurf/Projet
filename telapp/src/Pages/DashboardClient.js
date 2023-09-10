import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import axios from 'axios'
import { useForm } from "react-hook-form";
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AlertDialog from '../Components/AlertDialog';

const DashboardClient = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [openDialog, setOpenDialog] = useState(false);


  const handlePdfUrlChange = (event) => {
    setPdfUrl(event.target.value);
    
  };
  const handleButtonClick = () => {
    setOpenDialog(true);
  };
  const handleConfirm = () => {
    window.location.href = "http://localhost:3000/";
  };

  const handleCancel = () => {
    setOpenDialog(false);
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
    console.log(data)
    if(data.surname ===""){
      setError("nom")
    }else if(data.name ===""){
      setError("prenom")
    }else if(data.email ==="" || !(data.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ))){
      setError("email")
    }else if(data.phone ===""  || isNaN(data.phone)){
      setError("phone")
    }else if(data.cin ==="" || isNaN(data.cin)){
        setError("cin")
      }else{
      const result =await axios.post("http://localhost:5000/api/client/createClient", data)
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
      <h1 className="font-bold font-rob text-2xl">Dossier Juridique</h1>
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
        {/***********************Name Input*************************** */}
        {error==="nom" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          label={"Error"}
          {...register("surname")}
          helperText="Incorrect entry."
          variant="standard"
        />):(<TextField
          id="nom"
          label="Nom"
          defaultValue=""
          placeholder="Nom"
          variant="standard"
          {...register("surname")}
         />)}
        {/***********************SurName Input*************************** */}
        {error==="prenom" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          label={"Error"}
          {...register("name")}
          helperText="Incorrect entry."
          variant="standard"
        />):(<TextField
          id="prenom"
          label="Prénom"
          defaultValue=""
          placeholder="Prénom "
          variant="standard"
          {...register("name")}
         />)}
         {/***********************Email Input*************************** */}
        {error==="email" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          label={"Error"}
          defaultValue=""
          {...register("email")}
          helperText="Incorrect entry."
          variant="standard"
        />):(<TextField
          {...register("email")}
          id="email"
          label="Email"
          defaultValue=""
          placeholder="exemple@gmail.com"
          variant="standard"
         />)}
                  {/***********************CIN Input*************************** */}
        {error==="cin" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          label={"Error"}
          {...register("cin")}
          helperText="Incorrect entry."
          variant="standard"
        />):(<TextField
          {...register("cin")}
          id="cin"
          label="CIN "
          defaultValue=""
          placeholder="00000000"
          variant="standard"
         />)}
          {/***********************Phone Input*************************** */}
        {error==="phone" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          label={"Error"}
          {...register("phone")}
          helperText="Incorrect entry."
          variant="standard"
        />):(<TextField
          {...register("phone")}
          id="tel"
          label="Numéro Téléphone"
          defaultValue=""
          placeholder="00000000"
          variant="standard"
         />)}
               <br/>
               <br/>

          {/***********************dossier Upload Input*************************** */}
          {error==="dossier" ?(<TextField
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
        

      
          <Stack direction="row" className="flex justify-center items-center">
          <Button variant="contained" onClick={handleButtonClick}>Enregistrer</Button>
      <AlertDialog
        open={openDialog}
        title="Confirmation"
        message="Votre dossier a été retenue"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />          </Stack>
      </div>
    </Box>
        </form>
      </div>

  );
};

export default DashboardClient;