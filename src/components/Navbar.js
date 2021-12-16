import Portfolio from "./Portfolio"
import Contacts from "./Contact"
import Resume from "./Resume"
import Home from "./Home"
import { BrowserRouter as Router, Route, Link ,Routes} from "react-router-dom";

const Navbar = () => {
    return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav">
         <li className="nav-item">
         <Link className="nav-link"to="/Home">Home</Link>
         </li>
         <li className="nav-item">
         <Link className="nav-link" to="/Resume">Resume</Link>
         </li> 
         <li className="nav-item">
         <Link  className="nav-link" to="/Portfolio">Projects</Link>
         </li>
         <li className="nav-item">
         <Link className="nav-link" to="/Contact">Contacts</Link>
         </li>
         </ul>

         <hr />
       
          <Routes>
          <Route path="/Home" element={<Home/>}>
           
          </Route>
          <Route path="/Portfolio" element={<Portfolio/>}>
           
          </Route>
          <Route path="/Resume" element={<Resume/>}>
            
          </Route>
          <Route path="/Contact" element={<Contacts/>}>
          
          </Route>
        </Routes>
        </div>
        </nav>
     </Router> 

     </div>
    )
}

export default Navbar
