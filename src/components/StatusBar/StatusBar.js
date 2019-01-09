import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gitHubData from '../../data/github.json';

const StatusBar = () => (
  <footer id="status-bar">
    <a href={gitHubData.repoUrl} className="status-bar__left" rel="noopener noreferrer" target="_blank">
      <FontAwesomeIcon className="status-bar__icon" icon="code-branch" size="xs" inverse />
      <span className="status-bar__text">master</span>
    </a>

    <span className="status-bar__right">
      <FontAwesomeIcon className="status-bar__icon" icon="smile" size="sm" inverse />
    </span>
  </footer>
);

export default StatusBar;
