import { Link } from "react-router-dom";


const Item = ({product}) => {
    //console.log(product)
    
  return (
    <div className="card" style={{ width: "18rem", margin: 5 }}>
      <img
        src={product.img}
        style={{ width: 190, margin: "0 auto" }}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-title">${product.price}</h6>
        <Link to={`/detail/${product.id}`} className="btn btn-dark">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item
