/**
 * Certificates component.
 */
import React from 'react';
import certificatesData from '../../data/certificates.json';

const Certificates = () => {
  const listSubItems = (subItems) => (
    <ul className="certificates__subsection">
      {subItems.map((subCert) => (
        <li
          key={`${subCert.name}-div`}
          className="certificates__subsection__entry"
        >
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

    let classes = ['certificates__progress'];
    if (percentage >= 75) {
      classes.push('progress-high');
    } else if (percentage >= 50) {
      classes.push('progress-mid');
    } else {
      classes.push('progress-low');
    }

    return <span className={classes.join(' ')}>{`${percentage}%`}</span>;
  };

  return (
    <div className="container">
      <div className="certificates">
        <h2 className="container__title">{certificatesData.sectionTitle}</h2>
        <h3 className="container__subtitle">
          {certificatesData.sectionSubtitle}
        </h3>
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
      </div>
    </div>
  );
};

export default Certificates;
