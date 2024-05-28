import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';
import { get } from 'firebase/database';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../data/firebase';

const AdminPage = () => {
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [newImage, setNewImage] = useState("");
    const [error, setError] = useState("");

    const onSubmitStore = async () => {
        // Validation
        if (!newName.trim()) {
            setError("Produkt namn är obligatoriskt.");
            return;
        }
        if (newPrice <= 0) {
            setError("Pris måste vara ett positivt nummer.");
            return;
        }
        if (!newImage.trim()) {
            setError("Bild URL är obligatoriskt.");
            return;
        }

        // Clear error if validation passes
        setError("");

        const storeListCollectionRef = collection(db, 'storeList');
        await addDoc(storeListCollectionRef, {
            name: newName,
            price: newPrice,
            image: newImage
        });
        getStoreList(); 

        // Clear input fields after submission
        setNewName("");
        setNewPrice(0);
        setNewImage("");
    }

    return (
        <>
            <div className="redigering">
                {error && <p className="error">{error}</p>}
                <input placeholder="Produkt namn" value={newName} onChange={(e) => setNewName(e.target.value)} />
                <input placeholder="Pris" type="number" value={newPrice} onChange={(e) => setNewPrice(Number(e.target.value))}/>
                <input placeholder="Bild" value={newImage} onChange={(e) => setNewImage(e.target.value)}/>
                <button onClick={onSubmitStore}>Lägg till</button>
            </div>
        </>
    );
}

export default AdminPage;
