

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProductList from './components/ProductList';

import useCart from './hooks/useCart';

import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Cart from './components/Cart';

function App() {

  const { cartItems, getTotalItems, getTotal, addToCart, updateQuantity, removeFromCart } = useCart()

  return (
    <BrowserRouter>
      <div className="rainbow"></div>
      <div className="rainbow"></div>
      <div className="rainbow"></div>
 
      <div className="app">
        <header>
          <div className='items'>
            <nav>
              <Link to="/">Товары</Link>


            </nav>

            <nav><Link to="/cart">Корзина</Link></nav>
          </div>
          <img className='logo' src="https://logos-world.net/wp-content/uploads/2023/02/Skechers-Logo.png" alt="" />
          <div className="cart-header">
            🛒 Корзина:
            <span>{getTotalItems()} товаров</span>
            <br />
            <span>{getTotal()} руб.</span>
          </div>
        </header>

        <div className='catalog'>
          <Routes>

            <Route path='/' element={
              <>

                <ProductList onAddToCart={addToCart} />
              </>
            } />
            <Route path='/cart' element={
              <Cart
                cartItems={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveFromCart={removeFromCart}
                getTotal={getTotal}
              />
            } />

          </Routes>
        </div>
                <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  )

}

export default App;
