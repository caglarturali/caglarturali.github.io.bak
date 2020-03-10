/**
 * Certificates component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import Container from '../Container';
import certificatesData from '../../data/certificates.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Certificates = () => {
  const classes = useStyles();

  const listSubItems = (subItems) => (
    <ul className={classes.subsection}>
      {subItems.map((subCert) => (
        <li key={`${subCert.name}-div`} className={classes.subsection_entry}>
          <a
            href={subCert.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${subCert.name} Link`}
          >
            {subCert.name}
          </a>
        </li>
      ))}
    </ul>
  );

  const buildProgressText = (total, completed) => {
    const percentage = Math.round((completed / total) * 100);

    let classToUse = '';
    if (percentage >= 75) {
      classToUse = 'progress_high';
    } else if (percentage >= 50) {
      classToUse = 'progress_mid';
    } else {
      classToUse = 'progress_low';
    }

    return (
      <span
        className={clsx(classes.progress, classes[classToUse])}
      >{`${percentage}%`}</span>
    );
  };

  return (
    <Container
      title={certificatesData.sectionTitle}
      subtitle={certificatesData.sectionSubtitle}
    >
      <ul>
        {certificatesData.content.map((certificate) => (
          <div className="container__list" key={`${certificate.name}-div`}>
            <li key={certificate.url} className="certificates__entry">
              <div className="certificate__name">
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${certificate.name} Link`}
                >
                  {certificate.name}
                  {buildProgressText(
                    certificate.total_courses ? certificate.total_courses : 1,
                    certificate.sub_items ? certificate.sub_items.length : 1,
                  )}
                </a>
                {certificate.sub_items && listSubItems(certificate.sub_items)}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Certificates;
