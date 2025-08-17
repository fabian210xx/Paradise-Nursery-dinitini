import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function ShoppingCartPage({ setCurrentPage }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.cost.replace('$', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert("Próximamente");
  };

  return (
    <div className="shopping-cart-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="company-name">🌿 Paradise Nursery</div>
            <div className="nav-links">
              <button 
                className="nav-btn" 
                onClick={() => setCurrentPage('landing')}
              >
                Inicio
              </button>
              <button 
                className="nav-btn" 
                onClick={() => setCurrentPage('products')}
              >
                Productos
              </button>
              <button 
                className="cart-icon-btn active" 
                onClick={() => setCurrentPage('cart')}
              >
                🛒 ({totalItems})
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Cart Content */}
      <section className="cart-section">
        <div className="container">
          <h2>Cesta de la Compra</h2>
          
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Tu cesta está vacía</p>
              <button 
                className="continue-shopping-btn"
                onClick={() => setCurrentPage('products')}
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <>
              {/* Cart Summary */}
              <div className="cart-summary">
                <p className="total-items">Total de plantas en la cesta: {totalItems}</p>
                <p className="total-cost">Coste total: ${calculateTotal()}</p>
              </div>

              {/* Cart Items */}
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="item-thumbnail"
                    />
                    <div className="item-details">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-price">Precio unitario: {item.cost}</p>
                      <div className="quantity-controls">
                        <button 
                          className="decrement-btn"
                          onClick={() => handleDecrement(item)}
                        >
                          -
                        </button>
                        <span className="quantity">Unidades: {item.quantity}</span>
                        <button 
                          className="increment-btn"
                          onClick={() => handleIncrement(item)}
                        >
                          +
                        </button>
                      </div>
                      <p className="item-subtotal">
                        Subtotal: ${(parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemove(item)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart Actions */}
              <div className="cart-actions">
                <button 
                  className="continue-shopping-btn"
                  onClick={() => setCurrentPage('products')}
                >
                  Continuar comprando
                </button>
                <button 
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Pago
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Paradise Nursery. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default ShoppingCartPage;