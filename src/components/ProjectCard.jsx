import { useState } from 'react';

function ProjectCard({ title, description, image, url }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="project-card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`project-card ${isFlipped ? 'flipped' : ''}`}>
        {/* FRONT */}
        <div className="card-face card-front">
          <img src={image} alt={title} />
          <h3 className="project-title">{title}</h3>
        </div>

        {/* BACK */}
        <div className="card-face card-back">
          <p className="project-description">{description}</p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
