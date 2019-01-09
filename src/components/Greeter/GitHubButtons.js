import React from 'react';

const GitHubButtons = () => (
  <div className="github-buttons">
    <span className="github-button-wrapper">
      <a
        className="github-button"
        href="https://github.com/caglarturali"
        data-size="large"
        data-show-count="false"
        aria-label="Follow @caglarturali on GitHub"
      >
        Follow @caglarturali
      </a>
    </span>
    <span className="github-button-wrapper">
      <a
        className="github-button"
        href="https://github.com/caglarturali/caglarturali.github.io"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star caglarturali/caglarturali.github.io on GitHub"
      >
        Star
      </a>
    </span>
  </div>
);

export default GitHubButtons;
