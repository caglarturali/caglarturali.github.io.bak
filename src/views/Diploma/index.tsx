/**
 * Diploma component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
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
  const {
    semesters,
    metadata: { title, subtitle, info },
  } = diplomaData;

  return (
    <Container seo={{ title: subtitle ? `${title}, ${subtitle}` : title }}>
      <div
        data-tip={info || title}
        data-class={classes.tip}
        className={classes.title}
      >
        <h2>{title}</h2>
        <FontAwesomeIcon icon="question-circle" />
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className={classes.contents}>
        {semesters.map((s) => (
          <Semester semesterData={s} key={s.name} />
        ))}
      </div>
      <ReactTooltip />
    </Container>
  );
};

export default Diploma;
