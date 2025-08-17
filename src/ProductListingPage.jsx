import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductListingPage({ setCurrentPage }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [disabledButtons, setDisabledButtons] = useState({});

  // 6 plantas únicas organizadas en 3 categorías
  const plants = [
    // Categoría: Plantas Aromáticas
    {
      name: "Albahaca Fresca",
      image: "https://leonarditaiberia.com/wp-content/uploads/2021/01/Albahaca.jpg",
      cost: "$15.99",
      category: "Aromáticas"
    },
    {
      name: "Lavanda",
      image: "https://falconagroalimentaria.com/wp-content/uploads/2025/03/comprar-lavanda-natural.webp",
      cost: "$22.50",
      category: "Aromáticas"
    },
    // Categoría: Plantas Medicinales
    {
      name: "Aloe Vera",
      image: "https://cuidateplus.marca.com/sites/default/files/cms/2024-04/aloe-vera.jpg",
      cost: "$25.00",
      category: "Medicinales"
    },
    {
      name: "Manzanilla",
      image: "https://mamabruja.com/wp-content/uploads/2024/03/ioana-cristiana-Mv9J_UThISA-unsplash-2-scaled.jpg",
      cost: "$16.50",
      category: "Medicinales"
    },
    // Categoría: Plantas Purificadoras
    {
      name: "Eucalipto",
      image: "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/VFGSA3NHPBHN7GRDIHYTLHFIFI.jpg",
      cost: "$28.99",
      category: "Purificadoras"
    },
    {
      name: "Romero",
      image: "https://www.diet-health.info/images/recipes/700/1280px-rosemary-7560.jpg",
      cost: "$18.75",
      category: "Purificadoras"
    }
  ];

  const handleAddToCart = (plant) => {
    // Agregar al carrito
    dispatch(addItem(plant));
    
    // Deshabilitar botón temporalmente
    setDisabledButtons(prev => ({ ...prev, [plant.name]: true }));
    
    // Reactivar botón después de 2 segundos
    setTimeout(() => {
      setDisabledButtons(prev => ({ ...prev, [plant.name]: false }));
    }, 2000);
  };

  // Agrupar plantas por categoría
  const plantsByCategory = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div className="product-listing-page">
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
                className="nav-btn active" 
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

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <h2>Nuestras Plantas de Interior</h2>
          
          {Object.entries(plantsByCategory).map(([category, categoryPlants]) => (
            <div key={category} className="category-section">
              <h3 className="category-title">{category}</h3>
              <div className="plants-grid">
                {categoryPlants.map((plant, index) => (
                  <div key={index} className="plant-card">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="plant-thumbnail"
                    />
                    <div className="plant-info">
                      <h4 className="plant-name">{plant.name}</h4>
                      <p className="plant-price">{plant.cost}</p>
                      <button 
                        className={`add-to-cart-btn ${disabledButtons[plant.name] ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={disabledButtons[plant.name]}
                      >
                        {disabledButtons[plant.name] ? '✓ Agregado' : 'Añadir a la cesta'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

export default ProductListingPage;