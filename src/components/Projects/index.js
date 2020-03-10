/**
 * Projects component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../Container';
import projects from '../../data/projects.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Projects = () => {
  const classes = useStyles();

  return (
    <Container
      title={projects.sectionTitle}
      subtitle={projects.sectionSubtitle}
    >
      <ul>
        {projects.content.map((project) => (
          <div className="container__list" key={project.name}>
            <li key={project.name} className={classes.entry}>
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={classes.name}>{project.name}</div>
                <div className={classes.description}>{project.description}</div>
                <div className={classes.tech}>{project.tech}</div>
              </a>
            </li>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Projects;
