import React from 'react';

import spotify from '../api/spotify';

import SearchBar from './SearchBar';
import Track from './Track';

class SearchPage extends React.Component {

  state = { tracks: [], selectedTrack: null };

  onTermSubmit = async (term) => {
    const searchResults = await spotify.get('/search', {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      },
      params: {
        q: term,
        type: 'track',
        limit: 10
      }
    });

    this.setState({ tracks: searchResults.data.tracks.items });
  }

  onTrackSelect = (track) => {
    this.props.onPlaySong(track)
    this.setState({ selectedTrack: track })
  }

  render() {

    const tracks = this.state.tracks.map(track => {
      return (<Track  
        key={track.id} 
        track={track}
        selectedTrack={this.state.selectedTrack} 
        onSongSelect={this.onTrackSelect}/>);  
    });

    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui relaxed divided list selection" style={{ marginTop: '20px' }}>
          {tracks}
        </div>
      </div>
    )
  }
}

export default SearchPage;