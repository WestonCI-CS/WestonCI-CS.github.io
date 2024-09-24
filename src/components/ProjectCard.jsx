import "../styles/projectCard.css";
import { FaGithub } from "react-icons/fa";

/**
 * ProjectCard component renders a card with an image and a project name.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.image - The URL of the project's image.
 * @param {string} props.name - The name of the project.
 * @param {string} props.github - The URL of the project's GitHub repository.
 * @returns {JSX.Element} The rendered ProjectCard component.
 */
export default function ProjectCard({ image, name, github }){
    return(
        <li className="project">
            <img 
                src={image} 
                alt={name} 
                className="project-image" 
            />
            <h2 className="project-name">{name}</h2>
            <div className="project-content">
                <a className="github" href={github}><FaGithub /> GitHub</a>
            </div>
        </li>
    );
}