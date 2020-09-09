/**
 * Diploma component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import Container from '../../components/Container';
import Semester from './components/Semester';
import { DiplomaTypes, Static } from '../../models';
import styles from './styles';
import Book from './components/Semester/Course/Book';

const useStyles = createUseStyles(styles);

export interface DiplomaProps {
  diplomaData: DiplomaTypes.Curriculum;
  staticData: Static;
}

const Diploma: React.FC<DiplomaProps> = ({ diplomaData, staticData }) => {
  const classes = useStyles();
  const { terms, optional } = diplomaData;
  const { diploma: diplomaStatic } = staticData;

  return (
    <Container title="Diploma" seo={{ title: diplomaStatic.title }}>
      <h2
        data-tip={diplomaStatic.info}
        data-class={classes.tip}
        className={classes.title}
      >
        <span>{diplomaStatic.title}</span>
        <FontAwesomeIcon icon="question-circle" />
      </h2>
      <div className={classes.contents}>
        {/* Base Curriculum */}
        {terms.map((t) => (
          <Semester semesterData={t} key={t.name} />
        ))}

        {/* Optional Reading */}
        <details className={classes.optional}>
          <summary>Optional Reading</summary>
          {optional.map((book) => (
            <Book bookData={book} key={book.name} />
          ))}
        </details>
      </div>

      <ReactTooltip />
    </Container>
  );
};

export default Diploma;
