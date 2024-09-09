import FadeIn from "../vfx/FadeIn";
import ProjectCard from "../components/ProjectCard";
import projects from "../json/projects.json";

export default function Projects(){
    const projectData = projects.map(project => (
        <ProjectCard
            image={project.image}
            name={project.name}
            description={project.description}
            github={project.github}
        />
    ));

    return(
        <div>
            <FadeIn>
                <h1>Club Projects</h1>
            </FadeIn>
            {projectData}
        </div>
    );
}