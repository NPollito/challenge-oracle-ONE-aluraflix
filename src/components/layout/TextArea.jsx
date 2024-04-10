import { useState } from "react"

const TextArea = ({nameLabel, name, value, data, setData}) => {

    const [error, setError] = useState(false)

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
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
        <div className="bg-field rounded-3" style={{height: "127px"}}>
            <textarea 
                className={`text-field ${colorBorder}`}
                rows="3"
                placeholder={nameLabel}
                name={name} 
                id={name}
                value={value}
                style={{resize: "none"}}
                onChange={ handleChange }
                onBlur={ handleOnBlur }
            />
            <label htmlFor={name} className="text-label">{ nameLabel }</label>

            {
                error && <p className="text-danger">{ `El campo ${name} es obligatorio` }</p>
            }
        </div>
    )
}

export default TextArea;