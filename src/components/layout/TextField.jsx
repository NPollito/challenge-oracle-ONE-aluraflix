import { useState } from "react"

const TextField = ({type = "text", nameLabel, name, value, data, setData}) => {

    const [error, setError] = useState(false)

    const handleOnChange = e => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const colorBorder = error && "border-danger"

    const handleOnBlur = e => {

        if (e.target.value.trim() === "") {
            setError(true)
            return
        }

        setError(false)
    }
    
    return(
        <div className="bg-field rounded-3" style={{height: "58px"}}>
            <input 
                className={`text-field ${colorBorder}`}
                type={type}
                placeholder={nameLabel} 
                id={name} 
                name={name}
                value={value}
                required
                onChange={ handleOnChange }
                onBlur={ handleOnBlur }
            />
            <label htmlFor={name} className="text-label">{ nameLabel }</label>
            
            {
                error && <p className="text-danger">{ `El campo ${name} es obligatorio` }</p>
            }
        </div>
    )
}

export default TextField;