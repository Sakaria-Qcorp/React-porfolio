import Portfolio from "./Portfolio"
import Contacts from "./Contact"
import Resume from "./Resume"
import Home from "./Home"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Navbar = () => {
    return (
    <div>
    <Router>
        <div>
         <ul>
         <li>
         <Link to="/">Home</Link>
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

         <Route exact path="/" component={Home} />
         <Route path="/Resume" component={Resume} />
         <Route path="/Portfolio" component={Portfolio} />
         <Route path="/Contact" component={Contacts} />
        </div>
     </Router> 
     </div>
    )
}

export default Navbar
