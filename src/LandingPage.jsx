import React from 'react';
import { useSelector } from 'react-redux';

function LandingPage({ setCurrentPage }) {
  const cart = useSelector(state => state.cart.items);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="company-name">🌿 Paradise Nursery</div>
            <div className="nav-links">
              <button 
                className="nav-btn active" 
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
                className="cart-icon-btn" 
                onClick={() => setCurrentPage('cart')}
              >
                🛒 ({totalItems})
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a Paradise Nursery</h1>
          <div className="company-description">
            <p>Paradise Nursery es tu destino premium para plantas de interior excepcionales. Nos especializamos en plantas aromáticas y medicinales cuidadosamente seleccionadas que transformarán tu hogar en un oasis natural.</p>
            <p>Con más de 5 años de experiencia, ofrecemos plantas de la más alta calidad junto con el conocimiento experto para ayudarte a crear el jardín interior perfecto.</p>
          </div>
          <button 
            className="get-started-btn"
            onClick={() => setCurrentPage('products')}
          >
            Comenzar
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>¿Por qué elegir Paradise Nursery?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Calidad Premium</h3>
              <p>Plantas cuidadosamente seleccionadas y cultivadas con los más altos estándares de calidad.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Fácil Cuidado</h3>
              <p>Perfectas para interiores, con instrucciones detalladas para mantenerlas saludables.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>Beneficios Naturales</h3>
              <p>Propiedades aromáticas y medicinales que mejoran tu bienestar y ambiente.</p>
            </div>
          </div>
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

export default LandingPage;