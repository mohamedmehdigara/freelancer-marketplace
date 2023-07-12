import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Freelancers from './pages/Freelancers';
import Clients from './pages/Clients';
import ProjectDetails from './pages/ProjectDetails';
import Profile from './components/Profile';
import "./App.css";
import ClientCard from './components/ClientCard';
import FreelancerCard from './components/FreelancerCard';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/freelancers" element={<Freelancers/>} />
          <Route exact path="/clients" element={<Clients/>} />
          <Route exact path="/projects/:projectId" element={<ProjectDetails/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/navbar" element={<Navbar/>} />
          <Route exact path="/freelancerCard" element={<FreelancerCard/>} />
          <Route exact path="/clientcard" element={<ClientCard/>} />



        </Routes>
      </div>
    </Router>
  );
};

export default App;
