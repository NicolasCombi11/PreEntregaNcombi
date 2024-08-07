import { useState } from 'react'

function ItemCount({initialValue=1, stock, onAdd}) {
    const [count, setCount] = useState(initialValue);
    

    const decrement = () => {
        if(count>1){
            setCount(count => count - 1)
        }
    }
    const increment = () => {
        if(count < stock){
            setCount((count) => count + 1);
        }
    };

  return (
    <>
      
      <button onClick={decrement} type="button" className="btn btn-secondary">-</button>
      <h1>{count}</h1>
      <button onClick={increment} type="button" className="btn btn-secondary">+</button>
      <button onClick={() => onAdd(count)} type="button" className="btn btn-secondary">Agregar</button>
      
    </>
  );
}

export default ItemCount
