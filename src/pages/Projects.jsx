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
                    <h1 className="section-title projects-section">About Us</h1>
                    <h2 className="section-subtitle projects-section">
                        Weston Collegiate Institute's Hub for Youth-led Technological Innovation
                    </h2>
                </div>
        </div>
    );
}

const getImage = (file) => {
    return require(`../assets/images/projects/${file}`);
};
