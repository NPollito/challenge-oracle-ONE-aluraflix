import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import categoryContext from "../../context/categories/categoryContext";

import TextField from "../layout/TextField";
import TextArea from "../layout/TextArea";
import Button from "../layout/Button";

const FormCategory = () => {
  // obtener el state de las categorias
  const CategoryContext = useContext(categoryContext);
  const { categoryselect, addCategory, editCategory, clearCategoy } =
    CategoryContext;

  // effect para saber si hay una tarea seleccionada
  useEffect(() => {
    if (categoryselect !== null) {
      setData(categoryselect);
    }
  }, [categoryselect]);

  const [data, setData] = useState({
    name: "",
    description: "",
    color: "",
    code: "",
  });

  // desustructurar data
  const { name, description, color, code } = data;

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar si todos los datos son validos
    if (name.trim() === "" || description.trim() === "" || code.trim() === "") {
      setError(true);
      return;
    }

    // si es edicion o una nueva tarea
    if (categoryselect === null) {
      // asignar un id
      data.id = uuidv4();

      // agregar al state
      addCategory(data);
    } else {
      // actualizar categoria
      editCategory(data);
      // limpiar categoria
      clearCategoy();
    }

    // reiniciar o limpiar el formulario
    cleanForm();
  };

  // limpiar formulario
  const cleanForm = () => {
    setData({
      name: "",
      description: "",
      color: "",
      code: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        nameLabel="Nombre"
        name="name"
        value={name}
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
      <TextField
        nameLabel="Color"
        type="color"
        name="color"
        value={color}
        data={data}
        setData={setData}
      />
      <TextField
        type="number"
        nameLabel="Código de seguridad"
        name="code"
        value={code}
        data={data}
        setData={setData}
      />

      <div className="d-flex justify-content-around justify-content-md-between">
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
      </div>
    </form>
  );
};

export default FormCategory;
