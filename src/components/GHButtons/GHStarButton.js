import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GHStarButton extends React.Component {
  state = {
    loading: true,
    stargazers_count: null
  };

  componentDidMount() {
    this.loadStargazersCount();
  }

  loadStargazersCount() {
    const { user, repoName } = this.props;

    const apiUrl = `https://api.github.com/repos/${user}/${repoName}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        if (res.stargazers_count >= 0) {
          this.setState({
            loading: false,
            stargazers_count: res.stargazers_count
          });
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        this.setState({
          loading: false,
          stargazers_count: null
        });
      });
  }

  render() {
    const { user, repoName, repoUrl, showCount } = this.props;
    const { loading, stargazers_count } = this.state;

    return (
      <a
        className="main-button"
        href={repoUrl}
        aria-label={`Star ${user}/${repoName} on GitHub"`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="main-button__contents">
          <FontAwesomeIcon className="main-button__icon" icon="star" size="lg" />
          <span className="main-button__text">Star</span>
          {showCount && !loading && stargazers_count !== null && (
            <span className="main-button__count">{stargazers_count}</span>
          )}
        </span>
      </a>
    );
  }
}

export default GHStarButton;
