import { Link } from "react-router-dom";

export default function NavItem(props) {
    return (
        <li className="nav-item">
            <Link 
                className={props.className} 
                to={props.link}
                onClick={props.onClick}
            >
            {props.text}
            </Link>
        </li>
    )
}