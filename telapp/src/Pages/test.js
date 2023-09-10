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
