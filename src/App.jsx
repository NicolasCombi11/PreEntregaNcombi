import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import Footer from "./components/Footer/Footer";
import Contacto from "./components/Contacto/Contacto";
import Faq from "./components/Faq/Faq";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <div className="d-flex flex-column min-vh-100">
            <NavBar title="Suplementos LP" />
            <main className="flex-grow-1">
              <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route
                  exact
                  path="/category/:categoryId"
                  element={<ItemListContainer />}
                />
                <Route
                  exact
                  path="/detail/:productId"
                  element={<ItemDetailContainer />}
                />
                <Route exact path="/contacto" element={<Contacto />} />
                <Route exact path="/nosotros" element={<Nosotros />} />
                <Route exact path="/faq" element={<Faq />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route path="*" element={<h1>:( 404 Not found)</h1>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
