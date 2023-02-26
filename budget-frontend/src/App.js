//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

//PAGES
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Fofo from "./pages/Fofo";

//COMPONENTS
import NavBar from "./components/NavBar";
import { useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

//APP
//This is the main component that renders all the other components
//It also contains the routes for the pages
// Routes are defined in the Routes component
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entries" element={<Index />} />
          <Route path="/entries/new" element={<New />} />
          <Route path="/entries/:id/edit" element={<Edit />} />
          <Route path="/entries/:id" element={<Show />} />
          <Route path="/*" element={<Fofo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;