import React from 'react';


class TrackControls extends React.Component {

  componentDidMount() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      console.log("playback ready")
    };
  }

  render () {
    return (
      <div>
        
      </div>
    );
  }
}

export default TrackControls;