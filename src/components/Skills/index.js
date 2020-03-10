/**
 * Skills component.
 */
import React from 'react';
import skills from '../../data/skills.json';

const Skills = () => (
  <div className="container">
    <div className="skills">
      <h2 className="container__title">{skills.sectionTitle}</h2>
      {skills.content.map((subSection) => (
        <div className="skills__subsection" key={subSection.title}>
          <h3 className="container__subtitle">{subSection.title}</h3>
          <div className="container__list">
            <ul>
              {subSection.items.map((item) => (
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
