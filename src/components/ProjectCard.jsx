import "../styles/projectCard.css";

export default function ProjectCard({ image, name, github }){
    return(
        <div className="project">
            <img 
                src={image} 
                alt={name} 
                className="project-image" 
            />
            <div className="project-content">
                <h2 className="project-name">{name}</h2>
            </div>
        </div>
    );
}