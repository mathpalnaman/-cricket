import { Route,BrowserRouter,Routes } from "react-router-dom"
import './index.css'; 
import Landing from "./components/Landing"
import TournamentRegistration from "./components/TournamentRegistration";
function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/tournamentregistration" element={<TournamentRegistration/>}></Route>

      </Routes>
    </BrowserRouter>


  )
}

export default App
