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
import Book from './components/Semester/Course/Book';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface DiplomaProps {
  diplomaData: DiplomaTypes.Curriculum;
  staticData: Static;
}

const Diploma: React.FC<DiplomaProps> = ({ diplomaData, staticData }) => {
  const classes = useStyles();
  const { terms, extras } = diplomaData;
  const { diploma: diplomaStatic } = staticData;

  const renderExtra = (extra: DiplomaTypes.Extra) => {
    const { name, books } = extra;
    return (
      <details className={classes.extra} key={name}>
        <summary>{name}</summary>
        {books.map((book) => (
          <Book bookData={book} key={book.isbn[0]} />
        ))}
      </details>
    );
  };

  return (
    <Container seo={{ title: diplomaStatic.title }}>
      <h2
        data-tip={diplomaStatic.info}
        data-class={classes.tip}
        className={classes.title}
      >
        <span>{diplomaStatic.title}</span>
        <FontAwesomeIcon icon="question-circle" />
      </h2>
      <div className={classes.contents}>
        {/* Extras */}
        {extras.map((e) => renderExtra(e))}

        {/* Base Curriculum */}
        {terms.map((t) => (
          <Semester semesterData={t} key={t.name} />
        ))}
      </div>
      <ReactTooltip />
    </Container>
  );
};

export default Diploma;
