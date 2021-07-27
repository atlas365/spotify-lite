import './TrackDetail.css';

import React from 'react';

class TrackDetail extends React.Component {

  render () {

  console.log(this.props.track);
    return (

      <div className="row-align">
        <img className="ui tiny image" src={this.props.track.album.images[2].url} alt="Profile Pic"></img>
        <span className="align-bottom space-left">
          <div className="track-name">
            {this.props.track.name}
          </div>
          <div className="artist-names"> 
            {this.props.track.artists.map(a => a.name).join('/')}
          </div>
          <div className="album-name">
            {this.props.track.album.name}
          </div>
        </span>
      </div>
    );
  }
}

export default TrackDetail;