import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GHFollowButton extends React.Component {
  state = {
    loading: true,
    followers: null
  };

  componentDidMount() {
    this.loadFromLocalStorage();
    this.loadFollowerCount();
  }

  loadFromLocalStorage() {
    if (window.localStorage) {
      if ('followers_count' in window.localStorage) {
        this.setFollowersCount(window.localStorage.getItem('followers_count'));
      }
    }
  }

  loadFollowerCount() {
    const { user } = this.props;

    const apiUrl = `https://api.github.com/users/${user}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        if (res.followers >= 0) {
          this.setState({
            loading: false
          });
          this.setFollowersCount(res.followers);
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        this.setState({
          loading: false
        });
        this.setFollowersCount(null);
      });
  }

  setFollowersCount(count) {
    this.setState({ followers: count });
    if (window.localStorage) {
      window.localStorage.setItem('followers_count', count);
    }
  }

  render() {
    const { user, showCount } = this.props;
    const { loading, followers } = this.state;

    return (
      <a
        className="main-button"
        href={`https://github.com/${user}`}
        aria-label={`Follow @${user} on GitHub`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="main-button__contents">
          <FontAwesomeIcon className="main-button__icon" icon={['fab', 'github']} size="lg" />
          <span className="main-button__text">{`Follow @${user}`}</span>
          {showCount && !loading && followers !== null && <span className="main-button__count">{followers}</span>}
        </span>
      </a>
    );
  }
}

export default GHFollowButton;
