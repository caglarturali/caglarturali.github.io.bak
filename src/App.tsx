import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import MainLayout from './layouts/Main';
import Greeter from './components/Greeter';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import {
  certificates,
  contact,
  greeter,
  education,
  projects,
  skills,
} from './data';

const HomeRoute: React.FC<RouteComponentProps> = () => (
  <Greeter data={{ contact, greeter }} />
);
const SkillsRoute: React.FC<RouteComponentProps> = () => (
  <Skills data={skills} />
);
const EducationRoute: React.FC<RouteComponentProps> = () => (
  <Education data={education} />
);
const ProjectsRoute: React.FC<RouteComponentProps> = () => (
  <Projects data={projects} />
);
const CertificatesRoute: React.FC<RouteComponentProps> = () => (
  <Certificates data={certificates} />
);
const ContactRoute: React.FC<RouteComponentProps> = () => (
  <Contact data={contact} />
);

const Main: React.FC = () => (
  <MainLayout>
    <Router>
      <HomeRoute path="/" />
      <SkillsRoute path="/skills" />
      <EducationRoute path="/education" />
      <ProjectsRoute path="/projects" />
      <CertificatesRoute path="/certifications" />
      <ContactRoute path="/contact" />
    </Router>
  </MainLayout>
);

const App: React.FC = () => {
  return <Main />;
};

export default App;
