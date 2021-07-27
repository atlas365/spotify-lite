import './Track.css';

import React from 'react';

const Track = ({ track, selectedTrack, onSongSelect }) => {

  const outline = track.id === selectedTrack?.id ? '' : 'outline';
  const selected = track.id === selectedTrack?.id ? 'selected' : '';
  
  return (
    <div className={`item ${selected}`} onClick={ () => onSongSelect(track) }>
      <i className={`large play circle ${outline} middle icon`}></i>
      <div className="content">
        <div className="header">{track.name}</div>
        <div className="description">{track.artists.map(a => a.name).join('/')}</div>
      </div>
    </div>
  )
  
}

export default Track;