/**
 * GitHubButtons component.
 */
import React from 'react';
import GHFollowButton from './GHFollowButton.js';
import GHStarButton from './GHStarButton.js';
import ghData from '../../data/github.json';

const GitHubButtons = () => (
  <div className="github-buttons">
    <GHFollowButton showCount="true" {...ghData} />
    <GHStarButton showCount="true" {...ghData} />
  </div>
);

export default GitHubButtons;
