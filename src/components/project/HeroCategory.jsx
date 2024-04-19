import { useContext } from "react";
import videoContext from "../../context/videos/videoContext";

import TitleCategory from "./TitleCategory";
import VideoImage from "./VideoImage";

const HeroCategory = ({ listCategories }) => {
  // state de los videos
  const VideoContext = useContext(videoContext);
  const { videos } = VideoContext;

  //   extraer el objeto
  const [firstCategory] = listCategories;

  //   filtrar videos
  const filterVideosCategory = videos.filter(
    (video) => video.idCategory === firstCategory.id
  );
  const deleteFirstVideo = filterVideosCategory.filter((_, index) => index > 0);

  return (
    <article className="container h-100">
      <div className="row pb-3 h-100 align-items-end">
        <div className="col col-md-5 position-relative text-center text-md-start">
          <TitleCategory
            hidenCategory="d-none d-md-block position-absolute"
            title={firstCategory.name}
            color={firstCategory.color}
          />
          <p className="mt-3 fs-2 text-light">Challengue React</p>
          <a href="#" className="d-md-none btn btn-light px-5">
            Ver
          </a>
          <p className="d-none d-md-block text-light">
            Este challengue es una de aprendizaje. Es un mecanismo donde pondrás
            comprometerte en la resolución de un problema para poder aplicar
            todos los conocimientos adquiridos en la formacíon React.
          </p>
        </div>
        <div className="col col-md-7 d-none d-md-block text-end">
          <VideoImage
            imageVideo={filterVideosCategory[0].linkImage}
            sizeImage="400"
            color={firstCategory.color}
          />
        </div>
        <div className="d-none d-md-block mt-3">
          {deleteFirstVideo.map((video) => (
            <VideoImage
              key={video.id}
              imageVideo={video.linkImage}
              color={firstCategory.color}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default HeroCategory;
