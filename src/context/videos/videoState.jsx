import { useReducer } from "react";
import videoContext from "./videoContext";
import videoReducer from "./videoReducer";
import { GET_VIDEOS, NEW_VIDEO } from "../../types";

const VideoState = ({ children }) => {
  const initialState = {
    videos: [
      {
        id: "852",
        title: "FLUTTER: COMO Crear una APP DESDE CERO",
        linkVideo: "https://youtu.be/-pWSQYpkkjk",
        linkImage:
          "https://th.bing.com/th/id/OIP.aIdpl8ZBjC2Ec9e1h58q1QHaEK?rs=1&pid=ImgDetMain",
        category: "Back End",
        description:
          "Flutter es el framework multiplataforma para crear aplicaciones iOS y Android con una misma base de código mejor valorado en la actualidad. Te explico desde cero qué es, cómo funciona, pros y contras, cómo configurarlo y crear tu primera app usando Dart como lenguaje de programación.",
        idCategory: "100",
      },
    ],
  };

  // crear dispatch y state
  const [state, dispatch] = useReducer(videoReducer, initialState);

  // funciones
  // añadir video
  const addVideo = (video) => {
    dispatch({
      type: NEW_VIDEO,
      payload: video,
    });
  };

  return (
    <videoContext.Provider
      value={{
        videos: state.videos,
        addVideo,
      }}
    >
      {children}
    </videoContext.Provider>
  );
};

export default VideoState;
