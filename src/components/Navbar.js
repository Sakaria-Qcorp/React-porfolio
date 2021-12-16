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
         <ul>
         <li>
         <Link to="/Home">Home</Link>
         </li>
         <li>
         <Link to="/Resume">Resume</Link>
         </li> 
         <li>
         <Link to="/Portfolio">Projects</Link>
         </li>
         <li>
         <Link to="/Contact">Contacts</Link>
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
      
        </nav>
     </Router> 

     </div>
    )
}

export default Navbar
