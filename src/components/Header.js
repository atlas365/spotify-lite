import './Header.css';

import React from 'react';

import spotify from '../api/spotify';

import Account from './Account';

class Header extends React.Component {

  state = { account: null };

  async componentDidMount() {
    const response = await spotify.get('/me', {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    });

    this.setState({ account: response.data });
  }

  render() {
    return (
      <div className="ui segment">
        <div className="my-header">
          <div className="header-spotify">Spotify <span className="header-lite"> Lite</span></div>
        <div>
          <Account account={ this.state.account }/>
        </div>
        </div>
      </div>
    );
  }

}

export default Header;