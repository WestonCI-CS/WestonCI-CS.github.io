import "../styles/projectCard.css";
import FadeIn from "../vfx/FadeIn";

export default function ProjectCard(props){
    return(
        <FadeIn>
            <div className="project">
                <img 
                    src={props.image} 
                    alt={props.name} 
                    className="card-image" 
                />
                <div className="project-content">
                    <h2 className="project-name">{props.name}</h2>
                    <h3 className="project-description">{props.description}</h3>
                </div>
            </div>
        </FadeIn>
    );
}