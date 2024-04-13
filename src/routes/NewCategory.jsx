import FormCategory from "../components/categories/FormCategory";
import Categories from "../components/categories/Categories";

const NewCategory = () => {
  return (
    <main className="container">
      <h2 className="my-4 text-white text-center">Nueva Categoría</h2>
      <FormCategory />
      <Categories />
    </main>
  );
};

export default NewCategory;
