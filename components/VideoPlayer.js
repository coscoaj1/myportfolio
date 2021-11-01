import { useRef } from 'react';
import { Video, CloudinaryContext } from 'cloudinary-react';
const VideoPlayer = () => {
	const videoRef = useRef();
	return (
		<CloudinaryContext cloud_name="de5r0bknp">
			<div>
				<Video
					publicId="2021-11-01_16-33-54_sk2kaa"
					width="100%"
					controls
					autoplay="true"
					innerRef={videoRef}
				/>
			</div>
		</CloudinaryContext>
	);
};
export default VideoPlayer;
