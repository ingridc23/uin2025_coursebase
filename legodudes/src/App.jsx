
import ProductCard from './components/ProductCard';
import './styles/stayle.css'
import Cart from './components/Cart'
import Hadder from './components/hedder'
import { useState } from 'react';

function App() {
    const [CartCount, setCount] = useState(0);

  return (
    <div id="content">
        <section id="cart">
            <h3>Din handlevogn</h3>
            <div id="cart-products">
                <article className="cart-product">
                    <span className="title">Dragon Zane</span>
                    <span className="price">89,-</span>
                    <span className="quantity">x<span className="quantity-number">1</span></span>
                    <button className="delete">x</button>
                </article>
                <article className="cart-product">
                    <span className="title">Master Wu MMM MMMMM MMMMMM mMm MMMMMMM MMMMMMM</span>
                    <span className="price">999,-</span>
                    <span className="quantity">x<span className="quantity-number">9</span></span>
                    <button className="delete">x</button>
                </article>
                <article className="cart-product">
                    <span className="title">Vengestone Warrior</span>
                    <span className="price">89,-</span>
                    <span className="quantity">x<span className="quantity-number">3</span></span>
                    <button className="delete">x</button>
                </article>
            </div>
            <p>Totalt: Kr. <span id="cart-total">99999</span>,-</p>
        </section>
        <Hedder CartCount={cartCount}/>
        <ProductCard product={products} setCartCount={setCartCount}/>

       
        <footer>
            <p>2025 &copy; Legodudes</p>
        </footer>
    </div>
  )
}

export default App
