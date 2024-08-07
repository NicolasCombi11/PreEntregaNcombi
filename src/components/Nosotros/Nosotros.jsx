import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h1 className="nosotros-title">¿Quiénes Somos?</h1>
      <img 
        src="https://d2r9epyceweg5n.cloudfront.net/stores/003/189/220/rte/%C2%A1nuestro%20equipo!.png" 
        alt="Nuestro equipo" 
        className="nosotros-image"
      />
      <p className="nosotros-text">
        Suplementación La Plata es una pequeña empresa que comenzó allá por el año 2017. Al principio contábamos sólo con un bolso con 3-4 productos y el deseo de poder lograr un impacto en la comunidad y seguir creciendo.
      </p>
      <p className="nosotros-text">
        Este hermoso proyecto surgió en equipo, ya que nosotros mismos al utilizar suplementos deportivos notamos que era muy difícil acceder a ellos por la poca oferta y los precios elevados del mercado.
      </p>
      <p className="nosotros-text">
        Hoy seguimos compartiendo la misma pasión y la misma misión con respecto a la empresa: Incluir a la mayor cantidad de gente posible en el ambiente de los suplementos deportivos y al mejor precio posible.
      </p>
      <p className="nosotros-text">
        Gracias al esfuerzo y trabajo de años, hoy somos unos de los líderes en la venta de suplementos en nuestra querida Ciudad de La Plata, donde todo empezó.
      </p>
      <p className="nosotros-text">
        Pero queremos ir por más y queremos expandir estas ideas y esta pasión por lo que hacemos al resto del país, tratando siempre de hacer una diferencia y de ser la mejor opción para nuestros clientes y sus bolsillos.
      </p>
      <p className="nosotros-text">
        ¡No queremos dejar de agradecer a todos nuestros clientes por hacer esto posible y por estar con nosotros durante todos estos años!
      </p>
    </div>
  );
};

export default Nosotros;
