import Portfolio from "./Portfolio"
import Contacts from "./Contact"
import Resume from "./Resume"
const Navbar = () => {
    return (
        <div>
               {/* <nav className="navbar navbar-">
        <ul>
            <li><a href="./html/aboutMe.html">About Me</a> </li>
       
            <li><a  href="./html/contactMe.html">Contact Me</a></li>
       
            <li><a href="./html/porfolio.html">portfolio</a></li>
               
            <li ><a  href="./html/resume.html">Resume</a> </li>
           </ul>
                  
              
           </nav> 
    */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={Portfolio}>Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href={Resume}>Resume</a>
      </li>
      <li className="nav-item">
        <a class="nav-link" href={Contacts}>Contacts</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar

