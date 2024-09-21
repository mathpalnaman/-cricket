import { Route,BrowserRouter,Routes } from "react-router-dom"
import './index.css'; 
import Landing from "./components/Landing"
import TournamentRegistration from "./components/TournamentRegistration";
import ContactUs from "./components/ContactUs";
function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/tournamentregistration" element={<TournamentRegistration/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>

      </Routes>
    </BrowserRouter>


  )
}


export default App
