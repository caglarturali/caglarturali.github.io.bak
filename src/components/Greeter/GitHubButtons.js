import React from 'react';
import gitHubData from '../../data/github.json';

const GitHubButtons = () => (
  <div className="github-buttons">
    <span className="github-button-wrapper">
      <a
        className="github-button"
        href={`https://github.com/${gitHubData.user}`}
        data-size="large"
        data-show-count="false"
        aria-label={`Follow @${gitHubData.user} on GitHub`}
      >
        {`Follow @${gitHubData.user}`}
      </a>
    </span>
    <span className="github-button-wrapper">
      <a
        className="github-button"
        href={gitHubData.repoUrl}
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label={`Star ${gitHubData.user}/${gitHubData.repoName} on GitHub"`}
      >
        Star
      </a>
    </span>
  </div>
);

export default GitHubButtons;
