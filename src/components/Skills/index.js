/**
 * Skills component.
 */
import React from 'react';
import Container from '../Container';
import skills from '../../data/skills.json';

const Skills = () => (
  <Container title={skills.sectionTitle}>
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
  </Container>
);

export default Skills;
