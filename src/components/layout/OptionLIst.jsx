import { useState } from "react"

const OptionList = ({name, value, data, setData}) => {

    const categorias = [
        {id: "100", name: "Back End", description: "Todos los videos que estory usando para estudiar Back End", color: "red"},
        {id: "200", name: "Mobil", description: "Contenido que vengo estudiando sobre react native y flutter", color: "yellow"},
        {id: "300", name: "Infraestructura", description: "Todod lo que estoy aprendiendo dobre docker y mucho más", color: "blue"},
    ]

    const [error, setError] = useState(false)

    const handleOnChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleOnBlur = e => {
        if (e.target.value === "") {
            setError(true)
            return
        }

        setError(false)
    }

    return(
        <div className="bg-field rounded-3" style={{height: "58px"}}>

            <select 
                className="text-select" 
                name={name} 
                value={ value } 
                onChange={ handleOnChange } 
                onBlur={ handleOnBlur }
            >
                <option value=""  defaultValue="" hidden>Escoja una categoria</option>
                {
                    categorias.map(category => (
                        <option key={category.id}> { category.name }</option>
                    ))
                }
            </select>

            {
                error && <p className="text-danger mt-3">El campo category es obligatorio</p>
            }
        </div>
    )
}

export default OptionList;