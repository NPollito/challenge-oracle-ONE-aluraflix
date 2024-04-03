import Category from "../Category";

const Categories = () => {

    const categories = [
        {name: "Front End", description:  "lorem ipson", color: "green", code: 123},
        {name: "kio", description:  "lorem ipson", color: "red", code: 123},
        {name: "Bakend", description:  "lorem ipson", color: "yellow", code: 123},
    ]

    return(
        <section>
            <article className="container">
                {
                    categories.map(category => (
                        <Category category={category}/>
                    ))
                }
            </article>
        </section>
    )
}

export default Categories;