import React, { useEffect, useState } from 'react';
import { getDocs, collection, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../data/firebase';
import { useStore } from '../data/store';
import './LandingPage.css';

function LandingPage() {
  const { addToCart } = useStore();
  const [storeList, setStoreList] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const storeListCollectionRef = collection(db, 'storeList');

  useEffect(() => {
    const getStoreList = async () => {
      const data = await getDocs(storeListCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setStoreList(filteredData);
    };

    getStoreList();
  }, []);

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleUpdateClick = async (id) => {
    const productDoc = doc(db, 'storeList', id);
    await updateDoc(productDoc, {
      name: editingProduct.name,
      price: editingProduct.price,
    });
    setEditingProduct(null);
    const updatedList = storeList.map((product) =>
      product.id === id ? editingProduct : product
    );
    setStoreList(updatedList);
  };

  const handleDeleteClick = async (id) => {
    await deleteDoc(doc(db, 'storeList', id));
    const updatedList = storeList.filter((product) => product.id !== id);
    setStoreList(updatedList);
    setEditingProduct(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="wrap-produkt">
      {storeList.map((product) => (
        <div className="produkt-kort" key={product.id}>
          <img className="produkt-bild" src={product.image} alt={product.name} />
          {editingProduct?.id === product.id ? (
            <>
              <input
                className="edit-input"
                name="name"
                value={editingProduct.name}
                onChange={handleChange}
              />
              <input
                className="edit-input"
                name="price"
                type="number"
                value={editingProduct.price}
                onChange={handleChange}
              />
              <button className="update-knapp" onClick={() => handleUpdateClick(product.id)}>Update</button>
              <button className="delete-knapp" onClick={() => handleDeleteClick(product.id)}>Delete</button>
            </>
          ) : (
            <>
              <p className="produkt-namn">{product.name}</p>
              <p className="pris">{product.price}kr</p>
              <button className="köp-knapp" onClick={() => addToCart(product)}>Köp</button>
              <button className="edit-knapp" onClick={() => handleEditClick(product)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default LandingPage;
