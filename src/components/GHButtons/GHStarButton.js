/**
 * GHStarButton component.
 */
import React from 'react';
import ButtonLink from '../ButtonLink';

class GHStarButton extends React.Component {
  state = {
    loading: true,
    stargazers_count: null,
  };

  componentDidMount() {
    this.loadFromLocalStorage();
    this.loadStargazersCount();
  }

  loadFromLocalStorage() {
    if (window.localStorage) {
      if ('stargazers_count' in window.localStorage) {
        this.setStarGazersCount(
          window.localStorage.getItem('stargazers_count'),
        );
      }
    }
  }

  loadStargazersCount() {
    const { user, repoName } = this.props;

    const apiUrl = `https://api.github.com/repos/${user}/${repoName}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.stargazers_count >= 0) {
          this.setState({
            loading: false,
          });
          this.setStarGazersCount(res.stargazers_count);
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        this.setState({
          loading: false,
        });
        this.setStarGazersCount(null);
      });
  }

  setStarGazersCount(count) {
    this.setState({ stargazers_count: count });
    if (window.localStorage) {
      window.localStorage.setItem('stargazers_count', count);
    }
  }

  render() {
    const { user, repoName, repoUrl, showCount } = this.props;
    const { loading, stargazers_count } = this.state;

    return (
      <ButtonLink
        href={repoUrl}
        title={`Star ${user}/${repoName} on GitHub`}
        icon="star"
        iconSize="sm"
        text="Star"
        showCount={showCount && !loading && stargazers_count !== null}
        count={stargazers_count}
      />
    );
  }
}

export default GHStarButton;
