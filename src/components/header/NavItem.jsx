import { Link } from "react-router-dom";

/**
 * NavItem component renders a navigation item as a list element.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.className - The CSS class for the link.
 * @param {string} props.link - The URL to navigate to when the link is clicked.
 * @param {function} props.onClick - The function to call when the link is clicked.
 * @param {string} props.text - The text to display inside the link.
 * @returns {JSX.Element} The rendered navigation item.
 */
export default function NavItem(props) {
    return(
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