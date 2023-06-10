import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project";
import Navigation from "./components/Header/Navigation";
import Homepage from "./components/Homepage/Homepage";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";

export const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/my-portfolio" Component={Homepage} />
        <Route path="/my-portfolio/project/:id" Component={Project} />
        <Route path="/my-portfolio/skills" Component={Skills} />
        <Route path="/my-portfolio/contacts" Component={Contacts} />
      </Routes>
      <Footer />
    </Router>
  );
};
