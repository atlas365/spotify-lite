import './App.css';
import React from "react";

import spotify from './api/spotify';

import Header from './components/Header';
import SearchPage from './components/SearchPage';
import TrackPlayer from './components/TrackPlayer';

export const authEndpoint = 'https://accounts.spotify.com/authorize/';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "ad5f97b5562b42ac9e95de2ae7fc7b02";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-email",
  "user-read-private",
];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
// window.location.hash = "";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      token: null,
      account: null,
      playingSong: null
    };
  }

  getAccountInfo = async (token) => {
    const response = await spotify.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    this.setState({ account: response.data });
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getAccountInfo(_token);
    }
  }

  handleLogin = () => {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
  };

  onPlaySong = (song) => {
    this.setState({ playingSong: song });
  } 

  render() {
    return (
      <div className="ui">
        {!this.state.token && (
          <div className="ui segment">
            <button className="ui button" onClick={this.handleLogin}>
              Login to Spotify
            </button> 
          </div>
        )}
        {this.state.account && (
          <div className="site">
            <Header token={this.state.token}/>
            <span className="site-content">
              <SearchPage token={this.state.token} onPlaySong={ this.onPlaySong }/>
            </span>
            <TrackPlayer playingSong={this.state.playingSong} />
          </div>
        )}
      </div>
    );
    }
  }

export default App;