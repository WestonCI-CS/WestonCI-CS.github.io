import "../styles/projects.css";
import FadeIn from "../vfx/FadeIn";
import ProjectCard from "../components/ProjectCard";
import projects from "../json/projects.json";

export default function Projects() {
    const projectData = projects.map(project => (
        <ProjectCard
            image={getImage(project.image)}
            name={project.name}
            github={project.github}
        />
    ));

    return (
        <div className="projects-container">
            <ul className="carousel">
                {projectData}
            </ul>
            <div className="projects-text">
                <h1 id="projects-title" className="section-title">Projects</h1>
                <h2 id="projects-subtitle" className="section-subtitle">
                    Discover our creativity and passion in student-led projects.
                </h2>
                <p id="projects-body" className="text-body">
                    Contribute to the latest open-source projects or explore our existing works. 
                </p>
            </div>
        </div>
    );
}

const getImage = (file) => {
    return require(`../assets/images/projects/${file}`);
};
