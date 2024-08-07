
import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useNotification } from "../../context/NotificationContext";
import './ItemDetail.css';

const ItemDetail = ({ name, img, description, stock, category, id, price }) => {
  const { addItem, isInCart } = useCart();
  const { setNotification } = useNotification();

  const handleAdd = (count) => {
    const produtObj = {
      id, name, price, quantity: count
    };
    addItem(produtObj);
    setNotification("success", `Se agregaron ${count} de ${name}`);
  }

  return (
    <article className="item-detail">
      <h2 className="item-title">{name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={img}
            className="img-fluid rounded"
            alt={name}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text">{description}</p>
            <p className="card-text">Categoría: {category}</p>
            <h2 className="card-text">Precio: ${price}</h2>
            <h2 className="card-text">Disponible: {stock}</h2>
          </div>
        </div>
      </div>
      <div className="button-container">
        {
          isInCart(id) ? (
            <Link to='/cart' className="btn btn-primary">Finalizar Compra</Link>
          ) : (
            <ItemCount stock={stock} onAdd={handleAdd} />
          )
        }
      </div>
    </article>
  );
}

export default ItemDetail;

