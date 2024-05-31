import React, { useState } from 'react';
import { useStore } from '../data/store';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, addToCart, removeFromCart, storeList} = useStore();
    
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
        if (emailIsValid && telefonIsValid) {
            setShowPopup(true);
            console.log('Tack för din beställning');
        }
    };

    const emailIsValid = email.length > 0 && email.includes('@') ;
    const telefonIsValid = telefon.length > 0 && /^\d+$/.test(telefon);

    const emailErrorMessage = !emailIsValid ? 'Vänligen, fyll i din e-postadress' : '';
    const telefonErrorMessage = !telefonIsValid ? 'Vänligen, fyll i din telefonnummer' : '';
    return (
        <div>
            {/* E-post, telefonnummer och meddelande fält */}
            <div className="cart-info-frame">
                <div className="cart-info">
                    <div className="input-container">
                        <input 
                            type="email" 
                            placeholder="E-post"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailErrorMessage && <p className="error-message">{emailErrorMessage}</p>}
                    </div>
                    <div className="input-container">
                        <div className="cart-info">
                        <input 
                            type="text" 
                            placeholder="Telefonnummer" 
                            value={telefon}
                            onChange={handleTelefonChange}
                        />
                        {telefonErrorMessage && <p className="error-message">{telefonErrorMessage}</p>}
                    </div>
                    </div>
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
                    <div className='total-amount'>
                        <div className='total-amount-wraper'>
                        <p className="total-amount">Totalt: {cart.reduce((total, item) => total + Number(item.price), 0)} kr</p>
                        </div>
                    </div>
                </div>
            </ul>
            <button className="beställ-container" onClick={handleClick}>Beställ</button>
            {showPopup && 
                <div className="popup-overlay">
                    <div className="popup-content">
                        <p className="order-message">Tack för din beställning</p> 
                        <Link to="/" className="order-link">
                            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default CartPage;
