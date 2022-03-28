import axios from 'axios';

const KEY = 'AIzaSyC5sFnBXZgGBF7fYu2MFORERRIsgFTGZUs';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
