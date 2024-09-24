import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import "../../styles/navbar.css";

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    const handleScroll = () => {
        if(window.scrollY > 100) return setScrolled(true);
        setScrolled(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return( 
        <nav className={scrolled ? "scrolled" : ""}>  
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
                        className="secondary-button nav-join" 
                        link="https://forms.gle/P2XMST37cT7YKsVK7"
                        text="JOIN NOW" 
                        onClick={toggleMenu} 
                    />
                </div>
            </ul>
        </nav>    
    );
}