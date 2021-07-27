import React from 'react';

import TrackDetail from './TrackDetail';
import TrackControls from './TrackControls';


class TrackPlayer extends React.Component {

  render () {
    if (!this.props.playingSong) {
      return null;
    }

    return (
      <div className="ui container">
        <div className="ui segment grid">
          <div className="five wide column">
            <TrackDetail track={this.props.playingSong} />
          </div>
          <div className="eleven wide column">
            <TrackControls track={this.props.playingSong} />
          </div>
        </div>
      </div>
    );
  }
}

export default TrackPlayer;