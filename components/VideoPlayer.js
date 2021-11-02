import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
const VideoPlayer = ({ videoId }) => {
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="de5r0bknp">
      <div>
        <Video
          publicId={videoId}
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
