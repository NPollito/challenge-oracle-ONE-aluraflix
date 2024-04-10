import { useState } from "react";
import TextField from "../components/layout/TextField";
import TextArea from "../components/layout/TextArea";
import Button from "../components/layout/Button";

const Newdata = () => {

    const [data, setData] = useState({
        title: "",
        description: "",
        color: "",
        code: ""
    })
    
    const [error, setError]= useState(false)

     // desustructurar data
     const { title, description, color, code } = data

     const handleSubmit = e => {
        e.preventDefault()

        // validar si todos los datos son validos
        if ( 
                title.trim()  === "" || 
                description.trim() === "" ||
                code.trim() === ""
            )  {

                setError(true)
                return
        }

        setError(false)

        // reiniciar el formulario
        setData({
            title: "",
            description: "",
            color: "",
            code: ""
        })
    }

    return(
        <main className="container">
            <h2 className="my-4 text-white text-center">Nueva Categoría</h2>

            <form onSubmit={ handleSubmit }>
                <TextField 
                    nameLabel="Nombre" 
                    name="title"
                    value={title} 
                    data={data} 
                    setData={setData}
                />
                <TextArea 
                    nameLabel="Descripción" 
                    name="description"
                    value={description} 
                    data={data} 
                    setData={setData}
                />
                < TextField 
                    nameLabel="Color" 
                    type="color"
                    name="color"
                    value={color} 
                    data={data} 
                    setData={setData}
                />
                <TextField 
                    type="number"
                    nameLabel="Código de seguridad" 
                    name="code"
                    value={code} 
                    data={data} 
                    setData={setData} 
                />

                {
                    error && <p className="text-danger">Todos los campos son obligatorios</p>
                }

                <div className="d-flex justify-content-around justify-content-md-between">
                    <div className="d-flex gap-3 mb-4">
                        <Button type="submit" typeBotton="btn-primary" value="Guardar" paddingX="4"/>
                        <Button type="button" typeBotton="btn-secondary" value="Limpiar" paddingX="4"/>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Newdata;