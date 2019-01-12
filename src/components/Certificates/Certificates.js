import React from 'react';
import certificatesData from '../../data/certificates.json';

const Certificates = () => (
  <div className="container">
    <div className="certificates">
      <h2 className="container__title">certifications</h2>
      <h3 className="container__subtitle">Certificates that I have collected over time</h3>
      <ul>
        {certificatesData.map(certificate => (
          <div className="container__list" key={`${certificate.name}-div`}>
            <li key={certificate.url} className="certificates__entry">
              <div className="certificate__name">{certificate.name}</div>
              <div className="certificate__homepage">
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${certificate.name} Link`}
                >
                  View certificate
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
