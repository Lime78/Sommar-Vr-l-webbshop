import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';
import { get } from 'firebase/database';
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { db } from '../data/firebase'

const AdminPage = () => {
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [newImage, setNewImage] = useState("");

    const onSubmitStore = async () => {
        const storeListCollectionRef = collection(db, 'storeList');
        await addDoc(storeListCollectionRef, {
            name: newName,
            price: newPrice,
            image: newImage
        });
        getStoreList(); 
    }

    return (
        <>
            <div className="redigering">
                <input placeholder="Produkt namn" value={newName} onChange={(e) => setNewName(e.target.value)} />
                <input placeholder="Pris" type="number" value={newPrice} onChange={(e) => setNewPrice(Number(e.target.value))}/>
                <input placeholder="Bild" value={newImage} onChange={(e) => setNewImage(e.target.value)}/>
                <button onClick={onSubmitStore}>Lägg till</button>
            </div>
        </>
    );
}

export default AdminPage;