/**
 * Skills component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../../components/Container';
import { Skill, BaseProps } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export type SkillsProps = BaseProps<Skill>;

const Skills: React.FC<SkillsProps> = ({ data, fileName }) => {
  const classes = useStyles();

  return (
    <Container
      title={data.name}
      seo={{ title: fileName, description: data.desc }}
    >
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
