import { Route,HashRouter,Routes } from "react-router-dom"
import './index.css'; 
import Landing from "./components/Landing"
import TournamentRegistration from "./components/TournamentRegistration";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Navbar from "./components/Navbar"; // Navbar component
import Services from "./components/Services";
import Footer from "./components/Footer";
function App() {

  return (
  
    <HashRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/tournamentregistration" element={<TournamentRegistration/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
      <Footer/>
    </HashRouter>


  )
}


export default App
