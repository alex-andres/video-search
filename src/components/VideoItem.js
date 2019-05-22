import React from 'react';

const VideoItem = props => {
  return (
    <div className="item">
      <div className="image">
        <img src={props.video.snippet.thumbnails.medium.url} />
      </div>
      <div className="content">
        <a className="header">Header</a>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p />
        </div>
        <div className="extra">Additional Details</div>
      </div>
    </div>
  );
};

export default VideoItem;
