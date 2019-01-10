import React from 'react';
import education from '../../data/education.json';

const Education = () => (
  <div className="container">
    <div className="education">
      <h2 className="container__title">education</h2>
      <h3 className="container__subtitle">My academic background</h3>
      <ul>
        {education.map(entry => (
          <div className="container__list" key={entry.years}>
            <li key={entry.years} className="education__entry">
              <div className="education__school">{entry.school}</div>
              <div className="education__department">{entry.department}</div>
              <div className="education__degree">{entry.degree}</div>
              <div className="education__years">{entry.years}</div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  </div>
);

export default Education;
