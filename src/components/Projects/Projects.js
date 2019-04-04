import React from 'react';
import projects from '../../data/projects.json';

const Projects = () => (
  <div className="container">
    <div className="projects">
      <h2 className="container__title">{projects.sectionTitle}</h2>
      <h3 className="container__subtitle">{projects.sectionSubtitle}</h3>
      <ul>
        {projects.content.map(project => (
          <div className="container__list" key={project.name}>
            <li key={project.name} className="projects__entry">
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project__name">{project.name}</div>
                <div className="project__description">
                  {project.description}
                </div>
                <div className="project__tech">{project.tech}</div>
              </a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  </div>
);

export default Projects;
