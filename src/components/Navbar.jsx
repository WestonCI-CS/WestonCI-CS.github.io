import "../styles/navbar.css";

function Navbar(){
    return( 
        <nav>  
            <Link to="/">Home</Link> 
            <Link to="/about">About</Link> 
            <Link to="/members">Members</Link> 
            <Link to="/projects">Projects</Link>
        </nav>    
    );
}

export default Navbar;