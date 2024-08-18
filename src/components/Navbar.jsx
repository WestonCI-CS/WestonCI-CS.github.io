import { Dropdown, DropdownButton } from "react-bootstrap";
import "../styles.css";

function Navbar(){
    return(
        <header>
            <div className="navbar">
                <nav>
                    <a className="logo" href="/">WCI CS Club</a>
                    <a className="nav-button" href="/members">Members</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;