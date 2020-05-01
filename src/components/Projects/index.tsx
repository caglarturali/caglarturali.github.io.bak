/**
 * Projects component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../Container';
import { Page, Project } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface ProjectsProps {
  data: Page<Project>;
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Container title={data.name} subtitle={data.desc}>
      <ul>
        {data.content.map(({ name, summary, tech, url }) => (
          <div className="container__list" key={name}>
            <li key={name} className={classes.entry}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <div className={classes.name}>{name}</div>
                <div className={classes.description}>{summary}</div>
                <div className={classes.tech}>{tech.join(', ')}</div>
              </a>
            </li>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Projects;
