import { Link } from "react-router-dom";
import { useState } from "react";
import NavItem from "./NavItem";
import "../../styles/navbar.css";

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return( 
        <nav>  
            <button className="dropdown-btn" onClick={toggleMenu}>☰</button>
            <Link className="home-button" to="/">WCI COMPUTER SCIENCE</Link>
            <ul className={`right-nav ${menuOpen ? 'show' : ''}`}>
                <NavItem 
                    link="/about" 
                    text="ABOUT" 
                    onClick={toggleMenu} 
                />
                <NavItem 
                    link="/members" 
                    text="MEMBERS" 
                    onClick={toggleMenu} 
                />
                <NavItem 
                    link="/projects" 
                    text="PROJECTS" 
                    onClick={toggleMenu} 
                />
                <div className="join-button-div">
                    <NavItem 
                        className="join-button" 
                        link="https://github.com/WestonCI-CS/WestonCI-CS.github.io"
                        text="JOIN NOW" 
                        onClick={toggleMenu} 
                    />
                </div>
            </ul>
        </nav>    
    );
}