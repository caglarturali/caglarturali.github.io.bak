/**
 * Diploma component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import Container from '../../components/Container';
import Semester from './components/Semester';
import Book from './components/Semester/Course/Book';
import { DiplomaTypes, Static } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface DiplomaProps {
  diplomaData: DiplomaTypes.Curriculum;
  staticData: Static;
}

const Diploma: React.FC<DiplomaProps> = ({ diplomaData, staticData }) => {
  const classes = useStyles();
  const { terms, extras } = diplomaData;
  const {
    diploma: { title, subtitle, info },
  } = staticData;

  const renderExtra = (extra: DiplomaTypes.Extra) => {
    const { name, books } = extra;
    return (
      <details className={classes.extra} key={name}>
        <summary>
          <span>{name}</span>
        </summary>
        {books.map((book) => (
          <Book courseBook={book} key={book.isbn[0]} />
        ))}
      </details>
    );
  };

  return (
    <Container seo={{ title: `${title}, ${subtitle}` }}>
      <div data-tip={info} data-class={classes.tip} className={classes.title}>
        <h2>{title}</h2>
        <FontAwesomeIcon icon="question-circle" />
        <p>{subtitle}</p>
      </div>
      <div className={classes.contents}>
        {/* Base Curriculum */}
        {terms.map((t) => (
          <Semester semesterData={t} key={t.name} />
        ))}

        {/* Extras */}
        {extras.map(renderExtra)}
      </div>
      <ReactTooltip />
    </Container>
  );
};

export default Diploma;
