const VideoImage = ({ imageVideo, sizeImage, color }) => {
  const size = sizeImage ? sizeImage : "300";
  return (
    <img
      src={imageVideo}
      alt="imagen video"
      style={{
        width: `${size}px`,
        border: `3px solid ${color}`,
      }}
    />
  );
};

export default VideoImage;
