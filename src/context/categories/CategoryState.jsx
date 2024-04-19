import { useReducer } from "react";
import categoryContext from "./categoryContext";
import categoryReducer from "./categoryReducer";

import {
  NEW_CATEGORY,
  DELETE_CATEGORY,
  SELECT_CATEGORY,
  EDIT_CATEGORY,
  CLEAR_CATEGORY,
  CURRENT_CATEGORY,
} from "../../types";

const CategoryState = ({ children }) => {
  const initialState = {
    categories: [
      {
        id: "100",
        name: "Front End",
        description: "Fomación Front end",
        color: "#6bd1ff",
        code: "898",
      },
      {
        id: "200",
        name: "Back End",
        description: "Todos los videos que estoy usando para estudiar Back End",
        color: "#ff0000",
        code: "2100",
      },
      {
        id: "300",
        name: "Mobil",
        description:
          "Contenido que vengo estudiando sobre react native y flutter",
        color: "#00ff48",
        code: "800",
      },
      {
        id: "400",
        name: "Innovación y Gestión",
        description: "Como mantener al equipo feliz y mucho más",
        color: "#3245ef",
        code: "52",
      },
    ],
    categoryselect: null,
    categoryvideo: null,
  };

  // crear dispatch y state
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  // funciones
  // obtener su id de una categoria seleccionada
  const currentCategory = (id) => {
    dispatch({
      type: CURRENT_CATEGORY,
      payload: id,
    });
  };

  // agregar categoria
  const addCategory = (category) => {
    dispatch({
      type: NEW_CATEGORY,
      payload: category,
    });
  };

  //   seleccionar categoria para edicion
  const selectCategory = (category) => {
    dispatch({
      type: SELECT_CATEGORY,
      payload: category,
    });
  };

  //   editar tarea seleccionada
  const editCategory = (category) => {
    dispatch({
      type: EDIT_CATEGORY,
      payload: category,
    });
  };

  // eliminar la tarea seleccionada
  const clearCategoy = () => {
    dispatch({
      type: CLEAR_CATEGORY,
    });
  };

  //   elimiar categoria
  const deleteCategory = (id) => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    });
  };

  return (
    <categoryContext.Provider
      value={{
        categories: state.categories,
        categoryselect: state.categoryselect,
        categoryvideo: state.categoryvideo,
        currentCategory,
        addCategory,
        selectCategory,
        editCategory,
        clearCategoy,
        deleteCategory,
      }}
    >
      {children}
    </categoryContext.Provider>
  );
};

export default CategoryState;
