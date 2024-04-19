import { useContext } from "react";
import categoryContext from "../context/categories/categoryContext";

import HeroCategory from "../components/project/HeroCategory";
import ListCategoriesProject from "../components/project/ListCategoriesProject";
import ButtonLink from "../components/layout/ButtonLink";

const Project = () => {
  // obtener state de las categorias
  const CategoryContext = useContext(categoryContext);
  const { categories } = CategoryContext;

  // filtrar categorias
  // obtener la primera categoria
  const firstCategory = categories.filter((_, index) => index <= 0);

  // no obtener la primera categoria
  const allCategory = categories.filter((_, index) => index > 0);

  return (
    <>
      <main>
        <section className="bg-hero-image">
          <HeroCategory listCategories={firstCategory} />
        </section>

        <section className="mt-3">
          <ListCategoriesProject
            listCategories={firstCategory}
            hideCategory="d-md-none"
          />
          <ListCategoriesProject listCategories={allCategory} />
        </section>
      </main>

      <aside className="d-grid d-md-none">
        <ButtonLink
          name="Nueva Video"
          type="btn-primary"
          paddingX="4"
          url="new-video"
        />
      </aside>
    </>
  );
};

export default Project;
