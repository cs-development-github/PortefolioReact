import ProjectCard from '../components/Projects/Card/project-card';
import '../styles/projects.css';
import { Project } from '../interfaces/project.interface';

const projects: Project[] = [
    {
        title: "Mon Projet",
        tag: "Mobile",
        imageUrl: "https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png",
    },
    {
        title: "Mon Projet",
        tag: "Mobile",
        imageUrl: "https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png",
    },
    {
        title: "Mon Projet",
        tag: "Mobile",
        imageUrl: "https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png",
    },
    {
        title: "Mon Projet",
        tag: "Mobile",
        imageUrl: "https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png",
    },
    {
        title: "Mon Projet",
        tag: "Mobile",
        imageUrl: "https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png",
    },
    {
        title: "Mon Projet",
        tag: "Mobile",
        imageUrl: "https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png",
    },
    {
        title: "Mon Projet",
        tag: "Mobile",
        imageUrl: "https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png",
    },
    {
        title: "Mon Projet",
        tag: "Mobile",
        imageUrl: "https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png",
    },
];

function Projects() {
    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    tag={project.tag}
                    imageUrl={project.imageUrl}
                />
            ))}
        </div>
    );
}

export default Projects;