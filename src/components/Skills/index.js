/**
 * Skills component.
 */
import React from 'react';
import Container from '../Container';
import skills from '../../data/skills.json';

const Skills = () => (
  <Container title={skills.sectionTitle}>
    {skills.content.map((subSection) => (
      <div key={subSection.title}>
        <h3>{subSection.title}</h3>
        <ul>
          {subSection.items.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </Container>
);

export default Skills;
