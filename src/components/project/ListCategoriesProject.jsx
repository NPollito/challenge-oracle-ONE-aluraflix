import { useContext } from "react";
import videoContext from "../../context/videos/videoContext";

import TitleCategory from "./TitleCategory";
import VideoImage from "./VideoImage";

const ListCategoriesProject = ({ listCategories, hideCategory }) => {
  // obtener state de los videos
  const VideoContext = useContext(videoContext);
  const { videos } = VideoContext;

  return (
    <>
      {listCategories.map((category) => {
        return (
          <article key={category.id} className={`${hideCategory} mb-5`}>
            <div className="px-3 d-md-flex gap-2">
              <TitleCategory title={category.name} color={category.color} />
              <p className="mt-2 text-light">{category.description}</p>
            </div>

            <div className="mt-3 px-3">
              {videos.map((video) => {
                if (video.idCategory === category.id) {
                  return (
                    <VideoImage
                      key={video.id}
                      imageVideo={video.linkImage}
                      color={category.color}
                    />
                  );
                }
              })}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ListCategoriesProject;
