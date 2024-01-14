import "./styls/main.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Project from "./pages/Project.js";
import Navbar from "./conponents/navbar/NavBar.js";
import Footer from "./conponents/footer/Footer.js";
import Home from "./pages/home.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contacts.js";
import ScrollToTop from "./utils/scrollToTop.js";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>

          <Footer />

      </Router>

    </div>
                
  );
}

export default App;
