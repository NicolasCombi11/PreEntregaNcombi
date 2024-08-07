import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [repeatemail, setRepeatemail] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();
        
        const userData = {
            name, phone, email, repeatemail
        };

        console.log("Formulario enviado", userData); // Mensaje de depuración

        onConfirm(userData);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleConfirm} className="w-50 p-4 border rounded">
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                       className="form-control"
                       type="text"
                       value={name}
                       onChange={({ target }) => setName(target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input 
                       className="form-control"
                       type="text"
                       value={phone}
                       onChange={({ target }) => setPhone(target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                       className="form-control"
                       type="email"
                       value={email}
                       onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Repetir Email</label>
                    <input 
                       className="form-control"
                       type="email"
                       value={repeatemail}
                       onChange={({ target }) => setRepeatemail(target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Crear Orden</button>
            </form>
        </div>
    );
}

export default CheckoutForm;

