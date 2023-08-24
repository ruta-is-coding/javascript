import Video from "../../Components/Video/Video";

const VideoPlayers = () => {
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1 className="my-3">Welcome to my Bachata party</h1>
      <Video
        id="HdepIOmowfU"
        autoplay="1"
        color="white"
        controls="1"
        loop="1"
        mute="1"
      />
      <Video
        id="iudb43yFHIY"
        autoplay="0"
        color="red"
        controls="0"
        start="0"
        end="178"
        loop="0"
      />
      <Video
        id="iudb43yFHIY"
        autoplay="0"
        color="red"
        controls="1"
        start="0"
        end="178"
        loop="0"
        thumbnail={true}
      />
    </div>
  );
};

export default VideoPlayers;
