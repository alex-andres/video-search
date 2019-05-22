import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = props => {
  return props.videos.map(video => {
    return <VideoItem video={video} />;
  });
};

export default VideoList;
