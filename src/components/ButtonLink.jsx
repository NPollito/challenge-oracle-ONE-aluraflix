import { Link } from "react-router-dom"

const ButtonLink = ({name, type, paddingX, url}) => {

    const showBotton = type === 'btn-outline-light' && 'd-none d-md-block'

    return(
        <Link to={url} className={`btn ${type} ${showBotton} px-${paddingX}`}>
            { name }
        </Link>
    )
}

export default ButtonLink;