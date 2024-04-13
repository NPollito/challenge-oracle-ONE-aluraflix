import ListCategories from "./ListCategories";

const Categories = () => {
  return (
    <section className="mt-3">
      <table className="table table-dark table-hover">
        <thead className="">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th className="text-center">Editar</th>
            <th className="text-center">Remover</th>
          </tr>
        </thead>
        <tbody>
          {/* listar las categorias */}
          <ListCategories />
        </tbody>
      </table>
    </section>
  );
};

export default Categories;
