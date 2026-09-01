import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/39/peace-lily-4269365_1280.jpg", description: "Removes toxins and purifies indoor air.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/11/01/19/35/fern-5704618_1280.jpg", description: "Adds humidity to the air and removes pollutants.", cost: "$14" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4851125_1280.jpg", description: "Easy to grow and excellent at removing toxins.", cost: "$20" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Healing properties and air purifying.", cost: "$10" }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/04/19/14/06/lavender-2241774_1280.jpg", description: "Calming scent, used in aromatherapy.", cost: "$20" },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2016/09/08/21/53/jasmine-1655581_1280.jpg", description: "Sweet fragrance, blooms at night.", cost: "$18" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2016/11/18/17/42/herbs-1835339_1280.jpg", description: "Herbaceous scent, great for cooking too.", cost: "$15" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/09/mint-1126282_1280.jpg", description: "Refreshing aroma, easy to cultivate.", cost: "$8" },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2018/07/18/19/29/lemon-balm-3547348_1280.jpg", description: "Citrus scent, attracts pollinators.", cost: "$12" },
        { name: "Geranium", image: "https://cdn.pixabay.com/photo/2016/06/07/19/26/geranium-1442654_1280.jpg", description: "Pleasant rose-like fragrance.", cost: "$14" }
      ]
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        { name: "Oregano", image: "https://cdn.pixabay.com/photo/2017/07/28/14/29/oregano-2548710_1280.jpg", description: "Contains compounds that deter pests.", cost: "$10" },
        { name: "Marigold", image: "https://cdn.pixabay.com/photo/2018/08/16/20/12/marigold-3611736_1280.jpg", description: "Natural deterrent for garden insects.", cost: "$9" },
        { name: "Basil", image: "https://cdn.pixabay.com/photo/2016/08/29/14/48/basil-1628180_1280.jpg", description: "Repels flies and mosquitoes.", cost: "$11" },
        { name: "Catnip", image: "https://cdn.pixabay.com/photo/2015/07/02/20/37/catnip-829681_1280.jpg", description: "Repels mosquitoes and attracts felines.", cost: "$13" },
        { name: "Citronella", image: "https://cdn.pixabay.com/photo/2019/06/14/19/32/plant-4274355_1280.jpg", description: "Famous for mosquito-repelling properties.", cost: "$16" },
        { name: "Garlic Vine", image: "https://cdn.pixabay.com/photo/2017/04/24/13/54/flowers-2256015_1280.jpg", description: "Garlic scent keeps pests away.", cost: "$22" }
      ]
    }
  ];

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/30/eco-5465432_1280.png" alt="" style={{ width: '50px' }} />
            <a href="/" style={{ textDecoration: 'none' }}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div className="nav-links">
          <a href="#" onClick={handlePlantsClick} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>Plants</a>
          <a href="#" onClick={handleCartClick} style={{ color: 'white', fontSize: '20px', textDecoration: 'none', position: 'relative' }}>
            <h1 className="cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                <rect width="256" height="256" fill="none"></rect>
                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6Z" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                <circle cx="80" cy="216" r="12" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                <circle cx="184" cy="216" r="12" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                <path d="M64,80H24" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
              </svg>
              {totalCartCount > 0 && <span className="cart_count_icon">{totalCartCount}</span>}
            </h1>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index} className="category-section">
              <h2>{category.category}</h2>
              <div className="plant-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="plant-card" key={plantIndex}>
                    <img className="plant-image" src={plant.image} alt={plant.name} />
                    <div className="plant-name">{plant.name}</div>
                    <div className="plant-cost">{plant.cost}</div>
                    <div className="plant-description">{plant.description}</div>
                    <button
                      className={`plant-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
