import React from "react";
import './ProjectCard.css';

function ProjectCard({ title, description, imageUrl }) {
    return (
        <div className="project-card">
            <div className="image-container">
                <img src={imageUrl} alt={`${title} cover`} className="project-image" />
                <div className="overlay">
                    <h2 className="project-title">{title}</h2>
                    <p className="project-description">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
