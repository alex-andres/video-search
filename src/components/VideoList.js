import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = ({ videos, onVideoSelect }) => {
  return videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });
};

export default VideoList;
