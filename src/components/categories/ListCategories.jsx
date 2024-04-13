import { useContext } from "react";
import categoryContext from "../../context/categories/categoryContext";

const ListCategories = () => {
  // obtener el state de las categorias
  const CategoryContext = useContext(categoryContext);
  const { categories, deleteCategory, selectCategory } = CategoryContext;

  // seleccionar una categoria
  const buttonSelectCategory = (category) => {
    selectCategory(category);
  };

  // eliminar una categoria
  const buttonDelete = (id) => {
    deleteCategory(id);
  };

  return (
    <>
      {categories.map((category) => (
        <tr key={category.id}>
          <td>{category.name}</td>
          <td>{category.description}</td>
          <td className="text-center">
            <button
              className="btn btn-primary"
              onClick={() => buttonSelectCategory(category)}
            >
              Editar
            </button>
          </td>
          <td className="text-center">
            <button
              className="btn btn-danger"
              onClick={() => buttonDelete(category.id)}
            >
              Eliminar
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ListCategories;
