import { useReducer } from "react";
import videoContext from "./videoContext";
import videoReducer from "./videoReducer";
import { NEW_VIDEO } from "../../types";

const VideoState = ({ children }) => {
  const initialState = {
    videos: [
      {
        id: "0",
        title: "Qué Significa Pensar Como Programador",
        linkVideo:
          "https://www.youtube.com/watch?v=ov7vA5HFe6w&ab_channel=AluraLatam",
        linkImage: "https://i3.ytimg.com/vi/ov7vA5HFe6w/maxresdefault.jpg",
        category: "Front End",
        description:
          "En este video Christian Velasco nos habla de las principales características de un Programador..",
        idCategory: "100",
      },
      {
        id: "1",
        title: "Curso COMPLETO de HTML GRATIS desde cero: SEO, semántica y más",
        linkVideo:
          "https://www.youtube.com/watch?v=3nYLTiY5skU&ab_channel=midulive",
        linkImage: "https://i3.ytimg.com/vi/3nYLTiY5skU/maxresdefault.jpg",
        category: "Front End",
        description:
          "¡Sumérgete en el emocionante mundo de la creación web! Aprende HTML desde cero en este curso completo y totalmente gratuito.",
        idCategory: "100",
      },
      {
        id: "2",
        title: "FLUTTER: COMO Crear una APP DESDE CERO",
        linkVideo:
          "https://www.youtube.com/watch?v=0Zb5fgO0ubE&ab_channel=HolaMundo",
        linkImage: "https://i3.ytimg.com/vi/0Zb5fgO0ubE/maxresdefault.jpg",
        category: "Back End",
        description: "Qué aprender para ser programador backend el 2023?.",
        idCategory: "200",
      },
      {
        id: "3",
        title: "¿Qué es la Innovación Empresarial?",
        linkVideo:
          "https://www.youtube.com/watch?v=2TZAiZkH7ew&ab_channel=GAGnosisAwareness",
        linkImage: "https://i3.ytimg.com/vi/2TZAiZkH7ew/maxresdefault.jpg",
        category: "Innovación y Gestión",
        description:
          "El contexto actual exige evolución, humana y empresarial. Hoy hablaremos de ¿Qué es la innovación empresarial?",
        idCategory: "400",
      },
      {
        id: "4",
        title:
          "¿Desarrollo web vs desarrollo móvil? Guía completa para elegir tu carrera",
        linkVideo:
          "https://www.youtube.com/watch?v=RudOLuV43Vk&ab_channel=EDteam",
        linkImage: "https://i3.ytimg.com/vi/RudOLuV43Vk/maxresdefault.jpg",
        category: "Mobil",
        description:
          "El desarrollo web (crear apps web) y el desarrollo móvil (crear apps para teléfonos) son dos de las áreas de la programación con más popularidad y demanda laboral en la actualidad.",
        idCategory: "300",
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
