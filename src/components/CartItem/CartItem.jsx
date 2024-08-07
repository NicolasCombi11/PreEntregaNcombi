import { useCart } from '../../hooks/useCart';
import './CartItem.css';

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useCart();
    const handleRemove = (id) => {
        removeItem(id);
    };

    return (
        <article className="CardCartItem">
            <header className="HeaderCartItem ">
                <h2 className='fs-3' >{name}</h2>
            </header>
            <section className="ContainerItemCartItem">
                <p className="ItemCartItem">Cantidad: {quantity}</p>
                <p className="ItemCartItem">Precio x unidad: ${price}</p>
            </section>
            <footer className="ItemFooterCartItem">
                <p className="InfoCartItem">Subtotal: ${price * quantity}</p>
                <button className="ButtonCartItem" onClick={() => handleRemove(id)}>
                    ❌
                </button>
            </footer>
        </article>
    );
};

export default CartItem;
