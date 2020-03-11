/**
 * GHFollowButton component.
 */
import React from 'react';
import ButtonLink from '../ButtonLink';

class GHFollowButton extends React.Component {
  state = {
    loading: true,
    followers: null,
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
      .then((res) => res.json())
      .then((res) => {
        if (res.followers >= 0) {
          this.setState({
            loading: false,
          });
          this.setFollowersCount(res.followers);
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        this.setState({
          loading: false,
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
      <ButtonLink
        href={`https://github.com/${user}`}
        title={`Follow @${user} on GitHub`}
        icon={['fab', 'github']}
        iconSize="lg"
        text={`Follow @${user}`}
        showCount={showCount && !loading && followers !== null}
        count={followers}
      />
    );
  }
}

export default GHFollowButton;
