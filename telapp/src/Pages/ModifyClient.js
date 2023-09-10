import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Navbar from "../Components/Navbar"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link, useParams} from 'react-router-dom';
import { Stack } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import {Matrice} from "../Components/Matrice.js"
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export default function FormPropsTextFields() {
    const idClient = useParams().id
    const [error, setError] = useState("")
    const [residence, setResidence] = useState([]);
    const [res, setRes] = useState("");
    const { register, handleSubmit } = useForm();
    const [distributeur, setDistributeur] = useState([])
    const [dist, setDist] = useState(0)
    const [mat, setMat] = useState("")
    const [client, setClient] = useState({})

    const handleChange = (event) => {
      setRes(event.target.value);
    };

    const handleChange2 = (event) => {
      setDist(event.target.value);
    };

    const handleChange3 = (event) => {
      setMat(event.target.value);
    };

    useEffect(()=>{
      async function fetchData(){
        const idAdmin = localStorage.getItem("id")
        const result = await axios.post('http://localhost:5000/api/admin/getAdmin', {id:idAdmin})
        if(result.data.admin){
          setResidence(result.data.admin.residence)
          setDistributeur(result.data.admin.distributeur)
        }
      }
      fetchData()
    },[])

    useEffect(()=>{
      async function fetchData(){
        const result = await axios.post('http://localhost:5000/api/admin/getClient', {id:idClient})
        if(result.data.client){
          setClient(result.data.client)
        }
      }
      fetchData()
    },[])

    const onSubmit = async (data) => {
      if(data.surname ===""){
        setError("nom")
      }else if(data.name ===""){
        setError("prenom")
      }else if(data.email ==="" || !(data.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ))){
        setError("email")
      }else if(data.phone ==="" || data.phone.length!==8){
        setError("phone")
      }else if(data.residence ===""){
        setError("residence")
      }else if(data.floor <1){
        setError("floor")
      }else if(data.appartement <1){
        setError("appartement")
      }else if(data.dist ===""){
        setError("dist")
      }else if(data.brin <1){
        setError("brin")
      }else if(data.matrice === ""){
        setError("matrice")
      }else if(data.joint <1){
        setError("joint")
      }else if(data.bloc <1){
        setError("bloc")
      }else if(data.coupleur <1){
        setError("coupleur")
      }else if(data.pb <1){
        setError("pb")
      }else{
        const result =await axios.post("http://localhost:5000/api/admin/modifyClient", {
          name:data.name,
          surname:data.surname,
          email:data.email,
          phone:data.phone,
          distributeur: data.dist,
          brin: data.brin,
          matrice: data.matrice,
          joint: data.joint,
          bloc: data.bloc,
          coupleur: data.coupleur,
          PB: data.pb,
          residence: data.residence,
          floor: data.floor,
          appartement: data.appartement,
          id: idClient
        })
        if(result.data.msg ==="Updated"){
          handleOpen()
        }else{
          alert("Something went wrong. Try again.")
        }
      }
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

  return (
      <div>
          <Navbar />
          
          <div className='flex flex-col justify-center items-center mt-20'>
          <h1 className='m-5 font-rob font-bold text-3xl'>Client's info</h1>
          <form onSubmit={handleSubmit(onSubmit)}></form>
          <Box
          className='grid grid-cols-4 gap-5 border rounded-3xl p-5'
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Updated client successfully
          </Typography>
          <Link to="/dashboard"><Button variant="contained" >Fermer</Button></Link>
        </Box>
      </Modal>
             {/***********************Name Input*************************** */}
        {error==="nom" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          placeholder={client?.surname}
          InputLabelProps={{
            shrink: true,
          }}
          label="Nom"
          {...register("surname")}
          helperText="Incorrect entry."
          variant="standard"
        />):(<TextField
          id="nom"
          label="Nom"
          placeholder={client?.surname}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          {...register("surname")}
         />)}
        {/***********************SurName Input*************************** */}
        {error==="prenom" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          placeholder={client?.name}
          InputLabelProps={{
            shrink: true,
          }}
          label="Prénom"
          {...register("name")}
          helperText="Incorrect entry."
          variant="standard"
        />):(<TextField
          id="prenom"
          label="Prénom"
          placeholder={client?.name}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          {...register("name")}
         />)}
         {/***********************Email Input*************************** */}
        {error==="email" ? (<TextField
          error
          type="email"
          id= {"standard-error-helper-text"}
          label="Email"
          placeholder={client?.name}
          InputLabelProps={{
            shrink: true,
          }}
          {...register("email")}
          helperText="Incorrect entry."
          variant="standard"
        />):(<TextField
          {...register("email")}
          id="email"
          label="Email"
          type="email"
          placeholder={client?.email}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
         />)}
         {/***********************Phone Input*************************** */}
        {error==="phone" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          placeholder={client?.phone}
          InputLabelProps={{
            shrink: true,
          }}
          label="Numéro Téléphone"
          {...register("phone")}
          helperText="Incorrect entry."
          variant="standard"
        />):(<TextField
          {...register("phone")}
          id="tel"
          label="Numéro Téléphone"
          placeholder={client?.phone}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
         />)}
             {/***********************Residence Input*************************** */}
        {error==="residence" ? (<TextField
        error
          id="outlined-select-currency"
          select
          label="Résidence"
          value={res}
          InputLabelProps={{
            shrink: true,
          }}
          {...register("residence")}
          onChange={handleChange}
          helperText="Choix invalide"
        >
          {residence.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>):(<TextField
          id="outlined-select-currency"
          select
          label="Résidence"
          value={res}
          placeholder={client?.residence}
          InputLabelProps={{
            shrink: true,
          }}
          {...register("residence")}
          onChange={handleChange}
          helperText="Choisir le résidence"
        >
          {residence.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>)}
      {/***********************Floor Input*************************** */}
      {error==="floor" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          label="Etage"
          {...register("floor")}
          helperText="Incorrect entry."
          variant="standard"
          type="number"
          defaultValue={1}
          InputLabelProps={{
            shrink: true,
          }}
        />):(<TextField
          id="floor"
          label="Étage"
          defaultValue={1}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          type="number"
          {...register("floor")}
         />)}
         {/***********************Apartment Input*************************** */}
      {error==="appartement" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          label="appartement"
          {...register("appartement")}
          helperText="Incorrect entry."
          variant="standard"
          type="number"
          defaultValue={1}
          InputLabelProps={{
            shrink: true,
          }}
        />):(<TextField
          id="appartement"
          label="Appartement"
          defaultValue={1}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          type="number"
          {...register("appartement")}
         />)}
             {/***********************Distributeur Input*************************** */}
        {error==="dist" ? (<TextField
        error
          id="outlined-select-currency"
          select
          label="Distributeur 144 FO"
          value={dist}
          {...register("dist")}
          onChange={handleChange2}
          helperText="Choix invalide"
        >
          {distributeur.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>):(<TextField
          id="outlined-select-currency"
          select
          label="Distributeur 144 FO"
          value={dist}
          {...register("dist")}
          onChange={handleChange2}
          helperText="Choisir le Distributeur"
        >
          {distributeur.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>)}
      {/***********************Brin Input*************************** */}
      {error==="brin" ? (<TextField
          error
          id= {"brin"}
          label="Brin"
          defaultValue={1}
          {...register("brin")} 
          helperText="Incorrect entry."
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange3}
          type="number"
          
        />):(<TextField
          id="brin"
          label="Brin"
          onChange={handleChange3}
          variant="standard"
          type="number"
          defaultValue={1}
          InputLabelProps={{
            shrink: true,
          }}
          {...register("brin")} 
         />)}
         {/***********************Matrice Input*************************** */}
         <TextField
          id="outlined-select-currency"
          select
          label="Matrice"
          value={mat}
          {...register("matrice")}
          onChange={handleChange3}
          helperText="Choisir le matrice"
        >
          {Matrice.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
         {/***********************Joint Input*************************** */}
      {error==="joint" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          label="Joint"
          {...register("joint")}
          helperText="Incorrect entry."
          variant="standard"
          type="number"
          defaultValue={1}
        />):(<TextField
          id="joint"
          label="Joint"
          defaultValue={1}
          variant="standard"
          type="number"
          {...register("joint")}
         />)}
         {/***********************Bloc Input*************************** */}
      {error==="bloc" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          
          {...register("bloc")}
          helperText="Incorrect entry."
          variant="standard"
          type="number"
          min="1"
        />):(<TextField
          id="bloc"
          label="Bloc"
          defaultValue={1}
          variant="standard"
          type="number"
          {...register("bloc")}
         />)}
         {/***********************Coupleur Input*************************** */}
      {error==="coupleur" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          
          {...register("joint")}
          helperText="Incorrect entry."
          variant="standard"
          type="number"
          min={1}
          max={8}
        />):(<TextField
          id="coupleur"
          label="Coupleur"
          defaultValue={1}
          min={1}
          max={8}
          variant="standard"
          type="number"
          {...register("coupleur")}
         />)}
         {/***********************PB Input*************************** */}
      {error==="PB" ? (<TextField
          error
          id= {"standard-error-helper-text"}
          
          {...register("pb")}
          helperText="Incorrect entry."
          variant="standard"
          type="number"
        />):(<TextField
          id="pb"
          label="PB"
          defaultValue={1}
          variant="standard"
          type="number"
          {...register("pb")}
         />)}
            <Stack direction="row" className="flex justify-center items-center" spacing={1}>
            
                    <Button variant="contained" color="warning" onClick={handleSubmit(onSubmit)} type="submit">Sauvegarder</Button>
                  
                  <Link to="/dashboard">
                    <Button variant="outlined" color="info">Retour</Button>
                  </Link>
            </Stack>
        </Box>

          </div>
      </div>
   
  );
}
