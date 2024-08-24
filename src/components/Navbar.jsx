import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar(){
    return( 
        <nav>  
            <Link className="home-button" to="/">WCI Computer Science</Link>
            <div className="right-nav">
                <Link to="/about">ABOUT</Link>
                <Link to="/members">MEMBERS</Link>
                <Link to="/projects">PROJECTS</Link>
                <div className="join-button-div">
                    <Link className="join-button" to="https://github.com/WestonCI-CS/WestonCI-CS.github.io/tree/johnsons-branch">JOIN NOW</Link>
                </div>
            </div>
        </nav>    
    );
}

export default Navbar;