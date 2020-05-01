/**
 * Skills component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../../components/Container';
import { Page, Skill } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface SkillsProps {
  data: Page<Skill>;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Container title={data.name}>
      {data.content.map(({ title, items }) => (
        <div key={title}>
          <h3 className={classes.subSectionTitle}>{title}</h3>
          <ul>
            {items.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
};

export default Skills;
