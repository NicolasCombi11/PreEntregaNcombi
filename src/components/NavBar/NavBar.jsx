import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

function NavBar({cartCount, title}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
  <div className="container-fluid">
    <Link className="navbar-brand text-light fs-2 "  to="./">Ecommerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light"  aria-current="page" to="/category/celular"> Celulares </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/category/tablet"> Tablets </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/category/computer"> Computers </Link>
        </li>
      </ul>
      <form className="d-flex text-light" role="search">
        <CartWidget cartCount={cartCount} />
      </form>
    </div>
  </div>
</nav>
  )
}

export default NavBar