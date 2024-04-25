import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';

const LoginCard = () => {

    const [name, setName] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function checkUsername() {
        if (name.length === 0) {
            setNameTouched(true);
        }
    }

    function checkPassword() {
        if (password.length === 0) {
            setErrorMessage('Lösenordsfältet kan inte vara tomt.');
        } else if (password !== 'mums') {
            setErrorMessage('Fel lösenord.');
        }
        else {
            setErrorMessage('');
        }
    }

    function validateForm() {
        checkUsername()
        checkPassword()
    }


    const nameIsValid = name.length > 0;
    const nameErrorMessage = nameIsValid ? '' : 'Vänligen fyll i ditt namn.';
    const isSubmitDisabled = password.length === 0 || password !== 'password' || !nameIsValid;

    let nameErrorClass = 'error ', nameClass = '';
    if (!nameTouched) {
        nameErrorClass += 'hidden';
    } else {
        nameErrorClass += nameIsValid ? 'hidden' : 'invalid';
        nameClass += nameIsValid ? 'valid' : 'invalid';
    }
    return (
        <div>
            <div className='loggin-container'>
                <div className="header">
                    <div className="text">Menyportal</div>
                    <div className="underline"></div>
                </div>
                <div className="input-frame">
                    <div className="input">
                        <input type="text" placeholder="Namn" required
                            className={nameClass}
                            value={name}
                            onChange={event => setName(event.target.value)}
                            onBlur={() => setNameTouched(true)}
                        />
                        <p className={nameErrorClass}>{nameErrorMessage} &nbsp;</p>
                    </div>
                    <div className="input">
                        <div className="input">
                            <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                            <p className="password-error">{errorMessage}</p>
                        </div>
                    </div>
                </div>
                {isSubmitDisabled ? <div className="submit-container">
                    <button className="submit" onClick={validateForm}>Logga in</button>
                </div>
                    :
                    <div className="submit-container">
                        <Link to="/EditPage">
                            <button className="submit">Logga in</button>
                        </Link>
                    </div>}
            </div>
        </div>
    );
}

export default LoginCard;

