import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Contacto.css';

const Contacto = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const enviar = async (data) => {
        try {
            const messageData = {
                name: data.nombre,
                email: data.email,
                message: data.mensaje,
                date: new Date()
            };

            await addDoc(collection(db, "mensajes"), messageData);
            toast.success("Mensaje enviado con éxito");
            reset();
        } catch (error) {
            toast.error("Error enviando mensaje");
            console.error("Error enviando mensaje:", error);
        }
    };

    return (
        <div className="container contact-container">
            <ToastContainer />
            <h1 className="main-title">Contacto</h1>
            <form className="contact-form" onSubmit={handleSubmit(enviar)}>
                <input 
                    type="text" 
                    placeholder="Ingresá tu nombre" 
                    {...register("nombre", { required: true })} 
                    className="form-control"
                />
                {errors.nombre && <span className="error-message">Este campo es requerido</span>}
                <input 
                    type="email" 
                    placeholder="Ingresá tu e-mail" 
                    {...register("email", { required: true })} 
                    className="form-control"
                />
                {errors.email && <span className="error-message">Este campo es requerido</span>}
                <textarea 
                    placeholder="Ingresá tu mensaje" 
                    {...register("mensaje", { required: true })} 
                    className="form-control1"
                />
                {errors.mensaje && <span className="error-message">Este campo es requerido</span>}
                <div className="button-group">
                    <button 
                        className="btn btn-secondary" 
                        type="button" 
                        onClick={() => reset()}
                    >
                        Resetear
                    </button>
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Contacto;
