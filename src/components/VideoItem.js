import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video.id.videoId)}
      key={video.id.videoId}
      className="item video-item"
    >
      <div className="image">
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.thumbnails.default.alt}
        />
      </div>
      <div className="content">
        <a className="header">{video.snippet.title} </a>
        <div className="description">
          <p> {video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
