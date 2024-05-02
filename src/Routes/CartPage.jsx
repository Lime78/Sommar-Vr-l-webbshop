import React from 'react';
import { useStore } from '../data/store';
import './CartPage.css';

const CartPage = () => {
    const { cart } = useStore();

    return (
        <div>
            <h1>Cart Page</h1>
            <ul>
                <div className="cart-flex">
                    {cart.map((product, index) => (
                        <li key={index}>
                            <img className="cart-bild"src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                            <p>{product.price}kr</p>
                            </li>
                    ))}
                </div>
            </ul>
        </div>
        
    );
}


export default CartPage