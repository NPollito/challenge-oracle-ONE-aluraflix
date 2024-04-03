import { useReducer } from "react";
import videoContext from "./VideoContext";
import VideoReducer from "./videoReducer";

const VideoState = () => {

    const initialState = {
        videos: [
            {
                id: "852",
                title: "FLUTTER: COMO Crear una APP DESDE CERO",
                linkVideo: "https://youtu.be/-pWSQYpkkjk", 
                linkImage: "https://th.bing.com/th/id/OIP.aIdpl8ZBjC2Ec9e1h58q1QHaEK?rs=1&pid=ImgDetMain",
                description: "Flutter es el framework multiplataforma para crear aplicaciones iOS y Android con una misma base de código mejor valorado en la actualidad. Te explico desde cero qué es, cómo funciona, pros y contras, cómo configurarlo y crear tu primera app usando Dart como lenguaje de programación.",
                codeCategory: "123456"
            },
        ]
    }

    // crear dispatch y state
    const [state, dispatch] = useReducer(VideoReducer, initialState)

    // obtener las tareas de un proyecto

    return(
        <videoContext.Provider value>
            {PaymentResponse.children}
        </videoContext.Provider>
    )
}

export default VideoState;