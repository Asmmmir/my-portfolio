import Navigation from "./components/Header/Navigation";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index path="/my-portfolio" Component={Main}/>
        <Route path="/my-portfolio/project/:id" Component={Project} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
