import { useContext } from "react";
import videoContext from "../context/videos/videoContext";
import ButtonLink from "../components/layout/ButtonLink";

const Project = () => {
  const VideoContext = useContext(videoContext);
  const { videos } = VideoContext;

  console.log(videos);

  return (
    <>
      <main></main>
      <aside className="d-grid d-md-none">
        <ButtonLink
          name="Nueva Video"
          type="btn-primary"
          paddingX="4"
          url="new-video"
        />
      </aside>
    </>
  );
};

export default Project;
