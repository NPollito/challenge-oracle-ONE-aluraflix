const Button = ({name, type, newBtn}) => {

    const newBotton = newBtn ? 'newBtn' : `${type}`
    const showBotton = newBtn && 'd-none d-md-block'

    return(
        <a href="#" className={`btn ${newBotton} ${showBotton}`}>
            { name }
        </a>
    )
}

export default Button;