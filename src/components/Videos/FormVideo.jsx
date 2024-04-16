import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import categoryContext from "../../context/categories/categoryContext";
import videoContext from "../../context/videos/videoContext";

import TextField from "../layout/TextField";
import OptionList from "../categories/OptionList";
import TextArea from "../layout/TextArea";
import Button from "../layout/Button";
import ButtonLink from "../layout/ButtonLink";

const FormVideo = () => {
  // obtener state de las categoryas
  const CategoryContext = useContext(categoryContext);
  const { categoryvideo } = CategoryContext;

  // obtener el state de los videos
  const VideoContext = useContext(videoContext);
  const { addVideo } = VideoContext;

  const [data, setData] = useState({
    title: "",
    linkVideo: "",
    linkImage: "",
    category: "",
    description: "",
  });

  // desustructurar data
  const { title, linkVideo, linkImage, category, description } = data;

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar si todos los datos son correctos
    if (
      title.trim() === "" ||
      linkVideo.trim() === "" ||
      linkImage.trim() === "" ||
      category.trim() === "" ||
      description.trim() === ""
    ) {
      setError(true);
      return;
    }

    // asignar un id y una id de la categoria
    data.id = uuidv4();
    data.idCategory = categoryvideo[0].id;
    addVideo(data);

    // reiniciar o limpiar el formulario
    cleanForm();
  };

  // limpiar formulario
  const cleanForm = () => {
    setData({
      title: "",
      linkVideo: "",
      linkImage: "",
      category: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        nameLabel="Título"
        name="title"
        value={title}
        data={data}
        setData={setData}
      />
      <TextField
        type="url"
        nameLabel="Link del video"
        name="linkVideo"
        value={linkVideo}
        data={data}
        setData={setData}
      />
      <TextField
        type="url"
        nameLabel="Link de la ímagen del video"
        name="linkImage"
        value={linkImage}
        data={data}
        setData={setData}
      />
      <OptionList
        name="category"
        value={category}
        data={data}
        setData={setData}
      />
      <TextArea
        nameLabel="Descripción"
        name="description"
        value={description}
        data={data}
        setData={setData}
      />

      <div className="d-flex flex-wrap justify-content-around justify-content-md-between">
        <div className="d-flex gap-3 mb-4">
          <Button
            type="submit"
            typeBotton="btn-primary"
            value="Guardar"
            paddingX="4"
          />
          <button className="btn btn-secondary px-4" onClick={cleanForm}>
            Limpiar
          </button>
        </div>
        <div>
          <ButtonLink
            name="Nueva Categoria"
            type="btn-primary"
            paddingX="4"
            url="/new-category"
          />
        </div>
      </div>
    </form>
  );
};

export default FormVideo;
