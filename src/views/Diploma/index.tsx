/**
 * Diploma component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import Container from '../../components/Container';
import Semester from './components/Semester';
import { DiplomaTypes } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface DiplomaProps {
  diplomaData: DiplomaTypes.Curriculum;
}

const Diploma: React.FC<DiplomaProps> = ({ diplomaData }) => {
  const classes = useStyles();
  const { terms } = diplomaData;

  return (
    <Container
      title="Diploma"
      seo={{ title: 'Diploma in Software Engineering' }}
    >
      <p>
        Here is my self-curated study plan of{' '}
        <em>Diploma in Software Engineering</em>:
      </p>
      <div className={classes.root}>
        {terms.map((t) => (
          <Semester semesterData={t} key={t.name} />
        ))}
      </div>
    </Container>
  );
};

export default Diploma;
