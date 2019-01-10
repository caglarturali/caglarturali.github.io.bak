import React from 'react';
import Container from '../Container/Container';
import skills from '../../data/skills.json';

const Skills = () => (
  <Container>
    <div className="skills">
      <h2 className="skills__title">skills</h2>
      {skills.map(section => (
        <div className="skills__subsection" key={section.title}>
          <h3 className="skills__subtitle">{section.title}</h3>
          <div className="skills__items">
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
  </Container>
);

export default Skills;
