import React, { useState } from 'react';
import { useStore } from '../data/store';
import './CartPage.css';

const CartPage = () => {
    const { cart, addToCart, removeFromCart } = useStore();
    
    const handleAdd = (product) => {
        addToCart(product);
    };

    const handleRemove = (product) => {
        removeFromCart(product);
    };

    const [email, setEmail] = useState('');
    const [telefon, setTelefon] = useState('');
    const [meddelande, setMeddelande] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleTelefonChange = (event) => {
        setTelefon(event.target.value);
    };

    const handleMeddelandeChange = (event) => {
        setMeddelande(event.target.value);
    };

    const [showPopup, setShowPopup] = useState(false); // State för att visa popup

    const handleClick = () => {
        setShowPopup(true);
        console.log('Tack för din beställning');
    };

    return (
        <div>
            <h1>Cart Page</h1>
            {/* E-post, telefonnummer och meddelande fält */}
            <div className="cart-info-frame">
                <div className="cart-info">
                <input 
                    type="email" 
                    placeholder="E-post"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input 
                    type="text" 
                    placeholder="Telefonnummer" 
                    value={telefon}
                    onChange={handleTelefonChange}
                />
                <div className="cart-textarea">
                <textarea 
                    placeholder="Ev; meddelande" 
                    rows="4" 
                    value={meddelande}
                    onChange={handleMeddelandeChange}
                ></textarea>
                </div>
            </div>
            </div>
            <ul>
                <div className="cart-flex">
                    {cart.map((product, index) => (
                        <li key={index}>
                            <img className="cart-bild" src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                            <p>{product.price}kr</p>
                            <div>
                                <button onClick={() => handleRemove(product)}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => handleAdd(product)}>+</button>
                            </div>
                        </li>
                    ))}
                </div>
            </ul>
            <button className="beställ-container" onClick={handleClick}>Beställ</button>
                         {showPopup && 

                            <div className="popup-overlay">
                                <div className="popup-content">
                                    <p className="order-message">Tack för din beställning</p> 
                                </div>
                            </div>}
        </div>
    );
}

export default CartPage;

