import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	//we are mapping each video to a new video item component by jamming in a video item as a prop
	const renderedList = videos.map((video) => {
		//taking video and onVideoSelect props from App.js
		return (
			<VideoItem
				key={video.id.videoId}
				onVideoSelect={onVideoSelect}
				video={video}
			/>
		);
	});

	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
