import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TextField from "../components/layout/TextField";
import TextArea from "../components/layout/TextArea";
import OptionList from "../components/layout/OptionLIst";
import Button from "../components/layout/Button";
import ButtonLink from "../components/layout/ButtonLink";

const NewVideo = () => {

    const [data, setData] = useState({
        title: "",
        linkVideo: "", 
        linkImage: "",
        category: "",
        description: ""
    })

    const [error, setError] = useState(false)

    // desustructurar data
    const { title, linkVideo, linkImage, category, description } = data

    const handleSubmit = e => {
        e.preventDefault()

        // validar si todos los datos son correctos
        if ( 
                title.trim()  === "" || 
                linkVideo.trim() === "" ||
                linkImage.trim() === "" || 
                category.trim() === "" || 
                description.trim() === ""
            )  {

                setError(true)
                return
        }

        setError(false)

        // asignar un id
        data.id = uuidv4()

        // reiniciar el formulario
        setData({
            title: "",
            linkVideo: "", 
            linkImage: "",
            category: "",
            description: ""
        })
    }


    return(
        <main className="container">
            <h2 className="my-4 text-white text-center">Nuevo Video</h2>

            <form onSubmit={ handleSubmit }>
                <TextField 
                    nameLabel="Título" 
                    name="title"
                    value={title}
                    data={data} 
                    setData={setData}
                />
                <TextField 
                    type="url" 
                    nameLabel="Link del video" 
                    name="linkVideo"
                    value={linkVideo} 
                    data={data} 
                    setData={setData} 
                />
                <TextField 
                    type="url" 
                    nameLabel="Link de la ímagen del video" 
                    name="linkImage"
                    value={linkImage} 
                    data={data} 
                    setData={setData}
                />
                <OptionList
                    name="category"
                    value={category} 
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

                {
                    error && <p className="text-danger">Todos los campos son obligatorios</p>
                }

                <div className="d-flex flex-wrap justify-content-around justify-content-md-between">
                    <div className="d-flex gap-3 mb-4">
                        <Button type="submit" typeBotton="btn-primary" value="Guardar" paddingX="4"/>
                        <Button type="button" typeBotton="btn-secondary" value="Limpiar" paddingX="4"/>
                    </div>
                    <div>
                        <ButtonLink name="Nueva Categoria" type="btn-primary" paddingX="4" url="/new-category"/>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default NewVideo;