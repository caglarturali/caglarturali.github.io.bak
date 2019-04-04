import React from 'react';
import certificatesData from '../../data/certificates.json';

const Certificates = () => (
  <div className="container">
    <div className="certificates">
      <h2 className="container__title">{certificatesData.sectionTitle}</h2>
      <h3 className="container__subtitle">
        {certificatesData.sectionSubtitle}
      </h3>
      <ul>
        {certificatesData.content.map(certificate => (
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
                </a>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  </div>
);

export default Certificates;
