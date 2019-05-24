import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="card">
        <div className="content">
          <div className="ui embed">
            <iframe src={vidSrc} title="video-player" />
          </div>
          <div className="ui segment">
            <div className="ui header">{video.snippet.title}</div>
            <div className="description">{video.snippet.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
