const  ClientModel  = require("./models/Client");

const Client = require("express").Router(); 



Client.get("/getAll", async (req, res) => {
  try {
      let foundClients = await ClientModel.find();
      if (!foundClients){
        return  res.status(200).json({ clients:[]} );}
      else {
        return res.status(200).json({ clients:foundClients} ); 
      }
      
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg:false });
    }
});

Client.post("/deleteOne", async (req, res) => {
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

Client.post("/createClient", async (req, res) => {
  try {
    const {name, surname, phone, cin, juridique} = req.body
    const Client = await new ClientModel({
      name, surname, phone, email, cin, juridique
    });
    Client.save()
    if(Client === undefined){
      res.status(200).json({ msg:"Error"} ); 
    }else{
      res.status(200).json({ msg:"Added", id:Client._id} ); 
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg:error });
  }
});

Client.post("/updateClient", async (req, res) => {
  try {
    console.log(req.body)
    const {residence, floor, appartement, id} = req.body
    await ClientModel.findOneAndUpdate({_id:id},{
      residence, floor, appartement
    });
    res.status(200).json({ msg:"Updated"} ); 
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg:error });
  }
});

Client.post("/finishClient", async (req, res) => {
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

Client.post("/getClient", async (req, res) => {
  try {
    const {id} = req.body
    const Client = await ClientModel.findOne({_id:id});
    if(!Client){
      res.status(404).json({ msg:"Error"} ); 
    }else{
      res.status(200).json({ Client:Client} ); 
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg:error });
  }
});

Client.post("/getClient", async (req, res) => {
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

Client.post("/modifyClient", async (req, res) => {
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

module.exports=Client;