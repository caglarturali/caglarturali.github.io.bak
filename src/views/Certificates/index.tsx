/**
 * Certificates component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import Container from '../../components/Container';
import { Certificate, Linkable, BaseProps } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export type CertificatesProps = BaseProps<Certificate<Linkable>>;

const Certificates: React.FC<CertificatesProps> = ({ data, fileName }) => {
  const classes = useStyles();

  const listSubItems = (subItems: Linkable[]): React.ReactNode => (
    <ul className={classes.subsection}>
      {subItems.map(({ name, url }) => (
        <li key={`${name}-div`} className={classes.subsection_entry}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} Link`}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );

  const buildProgressText = (
    total: number,
    completed: number,
  ): React.ReactNode => {
    const percentage = Math.round((completed / total) * 100);

    let classToUse = '';
    if (percentage >= 75) {
      classToUse = 'progressHigh';
    } else if (percentage >= 50) {
      classToUse = 'progressMid';
    } else {
      classToUse = 'progressLow';
    }

    return (
      <span
        className={clsx(classes.progress, classes[classToUse])}
      >{`${percentage}%`}</span>
    );
  };

  return (
    <Container
      title={data.name}
      subtitle={data.desc}
      seo={{ title: fileName, description: data.desc }}
    >
      <ul>
        {data.content.map(({ name, url, totalCourses, earned }) => (
          <div key={`${name}-div`}>
            <li key={url} className={classes.entry}>
              <div className={classes.name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} Link`}
                >
                  {name}
                  {buildProgressText(totalCourses, earned.length)}
                </a>
                {earned && listSubItems(earned)}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Certificates;
