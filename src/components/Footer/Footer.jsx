import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container d-flex justify-content-between py-3">
      <div className="d-flex align-items-center">
          <a href="https://www.instagram.com/suplementacion_laplata/" target="_blank" rel="noopener noreferrer" className="me-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR226JB2XH-0H_0Ip6S5jkDLko-205_8qouzA&s" alt="Instagram" className="w-3 h-3"/>
          </a>
          <a href="https://www.facebook.com/p/Suplementaci%C3%B3n-La-Plata-100063469596477/" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hebKVb6U0uX_NAB3Gt_4SotlR6am4mgN0A&s" alt="Facebook" className="w-3 h-3"/>
          </a>
        </div>
        <div className="text-center">
          <p>Suplementos LP</p>
        </div>
        <div className="text-center">
          <p>12 n° 350, La Plata, Buenos Aires</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
