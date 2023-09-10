const  AdminModel  = require("./models/Admin");
const  ClientModel  = require("./models/Client");
const ReclamationModel = require("./models/Reclamation");


const Admin = require("express").Router(); 

Admin.post("/login", async (req, res) => {
    try {
        var { email, password } = req.body;
        email = email.toLowerCase();
        let foundUser = await AdminModel.findOne({ email });
        let foundClient = await ClientModel.findOne({ email });
        if (!foundUser && !foundClient){
          return  res.status(404).json({ msg: false} );}
      
    if (foundUser){
      if (foundUser.password!==password){
        return  res.status(401).json({ msg: false} );} 
        res.status(200).json({ msg: true, id: foundUser._id,role:"admin"} );
    }else if (foundClient){
      if (foundClient.password!==password){
        return  res.status(401).json({ msg: false} );}
  
      
      res.status(200).json({ msg: true, id: foundClient._id,role:"client"} );
    }
        
      } catch (error) {
        console.log(error)
        res.status(500).json({ msg:false });
      }
});

Admin.get("/getAll", async (req, res) => {
  try {
      let foundReclamations = await ReclamationModel.find();
      if (!foundReclamations){
        return  res.status(200).json({ reclamations:[]} );}
      else {
        return res.status(200).json({ reclamations:foundReclamations} ); 
      }
      
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg:false });
    }
});

Admin.post("/deleteOne", async (req, res) => {
  try {
    const {id} = req.body
    await ClientModel.findOneAndDelete({_id:id});
    const clients = await ClientModel.find()
    res.status(200).json({ clients:clients} ); 
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg:false });
  }
});

Admin.post("/createClient", async (req, res) => {
  try {
    const {name, surname, phone, cin} = req.body
    const admin = await new AdminModel({
      name, surname, phone, email, cin, password
    });
    admin.save()
    if(admin === undefined){
      res.status(200).json({ msg:"Error"} ); 
    }else{
      res.status(200).json({ msg:"Added", id:admin._id} ); 
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg:error });
  }
});

Admin.post("/updateClient", async (req, res) => {
  try {
    console.log(req.body)
    const {residence, floor, appartement, id} = req.body
    await AdminModel.findOneAndUpdate({_id:id},{
      residence, floor, appartement
    });
    res.status(200).json({ msg:"Updated"} ); 
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg:error });
  }
});

Admin.post("/finishClient", async (req, res) => {
  try {
    const {distributeur, brin, matrice, joint, bloc, coupleur, PB, id} = req.body
    await ClientModel.findOneAndUpdate({_id:id},{
      distributeur, brin, matrice, joint, bloc, coupleur, PB
    });
    res.status(200).json({ msg:"Updated"} ); 
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg:error });
  }
});

Admin.post("/getAdmin", async (req, res) => {
  try {
    const {id} = req.body
    const admin = await AdminModel.findOne({_id:id});
    if(!admin){
      res.status(404).json({ msg:"Error"} ); 
    }else{
      res.status(200).json({ admin:admin} ); 
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg:error });
  }
});

Admin.post("/getClient", async (req, res) => {
  try {
    const {id} = req.body
    const client = await ClientModel.findOne({_id:id});
    if(!client){
      res.status(404).json({ msg:"Error"} ); 
    }else{
      res.status(200).json({ client:client} ); 
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg:error });
  }
});

Admin.post("/modifyClient", async (req, res) => {
  try {
    const {distributeur, brin, matrice, joint, bloc, coupleur, PB, residence, floor, appartement,name, surname, phone, email, id} = req.body
    await ClientModel.findOneAndUpdate({_id:id},{
      distributeur, brin, matrice, joint, bloc, coupleur, PB, residence, floor, appartement,name, surname, phone, email
    });
    res.status(200).json({ msg:"Updated"} ); 
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg:error });
  }
});

module.exports=Admin;