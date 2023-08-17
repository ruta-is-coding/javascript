const Video = ({
  id,
  autoplay,
  color,
  controls,
  start,
  end,
  loop,
  thumbnail,
  allow,
}) => {
  let videoUrl = `https://www.youtube.com/embed/${id}?playlist=${id}&autoplay=${autoplay}&allow=${allow}&color=${color}&controls=${controls}&loop=${loop}&start=${start}&end=${end}`;
  let photoUrl = "https://picsum.photos/560/315";
  return id === "" || thumbnail ? (
    <img src={photoUrl} alt="Random Photo" className="mb-5" />
  ) : (
    <iframe src={videoUrl} width={560} height={315} className="mb-5"></iframe>
  );
};

export default Video;
