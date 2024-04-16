import { useState, useContext } from "react";
import categoryContext from "../../context/categories/categoryContext";

const OptionList = ({ value, data, setData }) => {
  // obtener el state de las categorias
  const categoriesContext = useContext(categoryContext);
  const { categories, currentCategory } = categoriesContext;

  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnBlur = (e) => {
    if (e.target.value === "") {
      setError(true);
      return;
    }

    setError(false);
  };

  // obtener el id de una categoria
  const handleClick = (id) => {
    currentCategory(id);
  };

  return (
    <div className="bg-field rounded-3" style={{ height: "58px" }}>
      <select
        className="text-select"
        name="category"
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      >
        <option value="" defaultValue="" hidden>
          Escoja una categoria
        </option>
        {categories.map((category) => (
          <option key={category.id} onClick={() => handleClick(category.id)}>
            {category.name}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-danger mt-3">El campo category es obligatorio</p>
      )}
    </div>
  );
};

export default OptionList;
