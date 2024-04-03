import TextField from "../components/layout/TextField";
import TextArea from "../components/layout/TextArea";
import Button from "../components/layout/Button";

const NewCategory = () => {

    
    return(
        <main className="container">
            <h2 className="my-4 text-white text-center">Nueva Categoría</h2>

            <form>
                <TextField nameLabel="Nombre" name="name"/>
                <TextArea nameLabel="Descripción" name="description"/>
                < TextField nameLabel="Color" type="color"/>
                <TextField nameLabel="Código de seguridad" name="code" />
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

export default NewCategory;