import React, { useContext, useEffect,useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes ,Link} from "react-router-dom";
import Home from "./Pages/Home";
import { About } from "./Pages/About";
import { Solutions } from "./Pages/Solutions";
import  ContactForm  from "./Pages/ContactForm";
import Footer from "./components/Footer";
// import Vroom from "./Pages/Vroom";
import ParentComponent from "./Pages/ParentComponent";
// import  AppProvider  from "./AppContext";
import Blog from "./Pages/Blog";
import QRCodeComponent  from "./Pages/QRcode";
import Community from "./Pages/Community";
import Download from "./Pages/Download";
import Package from "./Pages/Package";
import Partner from "./Pages/Partner";
import Scheduler from "./Pages/Scheduler";
import Social from "./Pages/Social";

import ButtonsPage from './Pages/ButtonsPage';
import ImagesPage from './Pages/ImagesPage';

function App() {

  const [bulbOn, setBulbOn] = useState(() => {
    const storedValue = localStorage.getItem("bulbOn");
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  const [curtainOpen, setCurtainOpen] = useState(() => {
    const storedValue = localStorage.getItem("curtainOpen");
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  // Define function to toggle bulb state
  const toggleBulb = () => {
    setBulbOn(prevState => {
      const newState = !prevState;
      localStorage.setItem("bulbOn", JSON.stringify(newState));
      return newState;
    });
  };

  // Define function to toggle curtain state
  const toggleCurtain = () => {
    setCurtainOpen(prevState => {
      const newState = !prevState;
      localStorage.setItem("curtainOpen", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
          <Route path="button" element={<ButtonsPage toggleBulb={toggleBulb} toggleCurtain={toggleCurtain} />} />
          <Route path="/images" element={<ImagesPage bulbOn={bulbOn} curtainOpen={curtainOpen} />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/download" element={<Download/>}/>
            <Route path="/package" element={<Package/>}/>
            <Route path="/partner" element={<Partner/>}/>
            <Route path="/scheduler" element={<Scheduler/>}/>
            <Route path="/social" element={<Social/>}/>
            <Route path="/vroom" component={ParentComponent} />
            {/* <Route path="/vroom" element={<Vroom background="/bg.png" />} /> */}
            {/* <Route path="/button" element={<Button />} /> */}
            <Route path="/qr" element={<QRCodeComponent />}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
  </>
  );
}

export default App;
