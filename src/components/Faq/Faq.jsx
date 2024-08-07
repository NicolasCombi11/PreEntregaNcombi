import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Preguntas Frecuentes</h1>

      <div className="faq-section">
        <h2>¿Cómo comprar?</h2>
        <p>A continuación te dejamos un paso a paso de cómo comprar en nuestra web:</p>
        <ol>
          <li>Agregá todos los productos que te interesen al carrito (no te olvides de seleccionar el sabor que desees y la cantidad)</li>
          <li>Una vez que tengas todos los productos en el carrito, hace click en "Iniciar compra"</li>
          <li>Completá tus datos y el método de envío que desees</li>
          <li>Y por último, ¡elegí el método de pago que mas te convenga!</li>
          <li>¡Una vez acreditado el pago, te vamos a enviar los productos y ya vas a poder disfrutarlos!</li>
        </ol>
      </div>

      <div className="faq-section">
        <h2>Cambios o devoluciones</h2>
        <p>¡Podés solicitar un cambio o devolución hasta 2 días después de que llegó o retiraste tu pedido!</p>
      </div>

      <div className="faq-section">
        <h2>Métodos de pago</h2>
        <p>Disponemos de mercado pago, transferencia, debito, crédito y efectivo (esta ultima opción es únicamente en compras realizadas en nuestro local)</p>
      </div>

      <div className="faq-section">
        <h2>Envíos o retiros en sucursal</h2>
        <p>Los envíos son a cargo de mercado envíos, la mejor logística hoy. Toda la información de tu envío te va a estar llegando vía mail. En caso de elegir la opción de retiro en sucursal podes pasar a retirar una vez que el pedido se encuentre preparado, siempre respetando nuestros días y horarios de atención (en caso de tener alguna duda sobre tu pedido, podes comunicarte con nosotros por Whatsapp antes de pasar)</p>
      </div>
    </div>
  );
};

export default Faq;
