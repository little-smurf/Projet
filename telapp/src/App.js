import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Form from "./Pages/Formulaire";
import DashboardClient from "./Pages/DashboardClient";
import  DashboardDossier  from "./Pages/DashboardDossier";
import Register from "./Pages/Register";
// import Profile from "./Pages/Profile";
// import Modify from "./Pages/ModifyClient";
import './index.css'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/dashboardclient" element={<DashboardClient/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboarddossier" element={<DashboardDossier/>} />


          {/* <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/modify/:id" element={<Modify/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;