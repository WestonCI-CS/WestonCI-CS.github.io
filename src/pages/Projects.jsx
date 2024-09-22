import FadeIn from "../vfx/FadeIn";
import ProjectCard from "../components/ProjectCard";
import projects from "../json/projects.json";

export default function Projects(){
    const projectData = projects.map(project => (
        <ProjectCard
            image={getProjectImage(project.image)}
            name={project.name}
            description={project.description}
            github={project.github}
        />
    ));

    return(
        <div>
            <FadeIn>
                <div className="projects-container">
                    {projectData}
                </div>
            </FadeIn>
        </div>
    );
}

const getProjectImage = (file) => {
    return require(`../assets/images/projects/${file}`);
}