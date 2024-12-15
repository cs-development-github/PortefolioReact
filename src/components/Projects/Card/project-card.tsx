import React from "react";
import './project-card.module.css';

interface ProjectCardProps {
    title: string;
    tag:string;
    imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, tag }) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <img src={imageUrl} alt={`${title} cover`} className="project-image" />
                <div className="overlay">
                    <h2 className="project-title">{title}</h2>
                    <p>{tag}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
