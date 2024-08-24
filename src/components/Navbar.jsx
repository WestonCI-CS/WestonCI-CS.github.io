import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar(){
    return( 
        <nav>  
            <Link className="home-button" to="/"></Link>
            <div className="right-nav">
                <Link to="/about">About</Link>
                <Link to="/members">Members</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>    
    );
}

export default Navbar;