import React from 'react';
import projects from '../../data/projects.json';

const Projects = () => (
  <div className="container">
    <div className="projects">
      <h2 className="container__title">projects</h2>
      <h3 className="container__subtitle">Some of the projects I've worked on so far.</h3>
      <ul>
        {projects.map(project => (
          <div className="container__list" key={project.name}>
            <li key={project.name} className="projects__entry">
              <div className="project__name">{project.name}</div>
              <div className="project__description">{project.description}</div>
              <div className="project__tech">{project.tech}</div>
              <div className="project__homepage">
                <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                  Project homepage
                </a>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  </div>
);

export default Projects;
