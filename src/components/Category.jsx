const Category = ({category}) => {

    const  {name, description ,color} = category

    return(
        <div className="d-flex gap-2 align-items-center">
            <span className="py-1 px-3 rounded-2 fw-semibold" style={{backgroundColor: color}}>{ name }</span>
            <p className="m-0">{ description }</p>
        </div>
    )
}

export default Category;