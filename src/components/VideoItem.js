import './VideoItem.css';
import React from 'react';

//passing props from video list
const VideoItem = ({ video, onVideoSelect }) => {
	return (
		//styles from semantics list
		//will have to look at that onClick method
		<div onClick={() => onVideoSelect(video)} className="item video-item">
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
