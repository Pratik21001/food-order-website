import React from 'react';
import food from"../assets/food.jpeg";
import { Link } from 'react-router-dom';
import '../style/Home.css';
function Home() {
  return (
        <div className="home" style={{ backgroundImage: `url(${food})` }}>
    <div className='headerContainer'>
        <h1>Food Corner</h1>
        <p>INDIAN FOOD ON A CLICK.</p>
    <Link to='/menu'>
    <button>Order Now</button>
    </Link>
    </div>
    </div>
  )
}

export default Home;