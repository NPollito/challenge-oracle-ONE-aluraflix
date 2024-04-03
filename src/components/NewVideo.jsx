import TextField from "./TextField";
import TextArea from "./TextArea";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

const NewVideo = () => {
    return(
        <main className="container">
            <h2 className="my-4 text-white text-center">Nuevo Video</h2>

            <form className="">
                <TextField nameLabel="Título" name="title" />
                <TextField type="link" nameLabel="Link del video" name="linkVideo" />
                <TextField nameLabel="Link de la ímagen del video" name="linkImage" />
                <TextArea nameLabel="Descripción" name="description"/>
                <TextField nameLabel="Código de seguridad" name="code" />
                <div className="d-flex flex-wrap justify-content-around justify-content-md-between">
                    <div className="d-flex gap-3 mb-4">
                        <Button type="submit" typeBotton="btn-primary" value="Guardar" paddingX="4"/>
                        <Button type="button" typeBotton="btn-secondary" value="Limpiar" paddingX="4"/>
                    </div>
                    <div className="">
                        <ButtonLink name="Nueva Categoria" type="btn-primary" paddingX="4" url="/new-category"/>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default NewVideo;