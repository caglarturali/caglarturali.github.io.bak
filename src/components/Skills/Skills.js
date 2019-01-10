import React from 'react';
import skills from '../../data/skills.json';

const Skills = () => (
  <div className="container">
    <div className="skills">
      <h2 className="container__title">skills</h2>
      {skills.map(section => (
        <div className="skills__subsection" key={section.title}>
          <h3 className="container__subtitle">{section.title}</h3>
          <div className="container__list">
            <ul>
              {section.items.map(item => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
