import { useReducer } from "react";
import categoryContext from "./categoryContext";
import categoryReducer from "./categoryReducer";

import {
  NEW_CATEGORY,
  DELETE_CATEGORY,
  SELECT_CATEGORY,
  EDIT_CATEGORY,
  CLEAR_CATEGORY,
} from "../../types";

const CategoryState = ({ children }) => {
  const initialState = {
    categories: [
      {
        id: "100",
        name: "Back End",
        description:
          "Todos los videos que estory usando para estudiar Back End",
        color: "#ff0000",
        code: "2100",
      },
      {
        id: "200",
        name: "Mobil",
        description:
          "Contenido que vengo estudiando sobre react native y flutter",
        color: "#00ff48",
        code: "800",
      },
      {
        id: "300",
        name: "Infraestructura",
        description: "Todod lo que estoy aprendiendo dobre docker y mucho más",
        color: "#bcff04",
        code: "52",
      },
    ],
    categoryselect: null,
  };

  // crear dispatch y state
  const [state, dispatch] = useReducer(categoryReducer, initialState);

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
    console.log(category);
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
