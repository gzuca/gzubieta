import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects(){
    return(
    <div className="page">
        <div id="projects">
            <h1 className="title">My Projects</h1>
            <p>If you want to see more information about each project, press the card of the project.</p>
            <div className="project-list">
                {projects.map((project, index) => (
                 <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    </div>
    )
}

export default Projects;