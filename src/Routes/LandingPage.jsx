import "./LandingPage.css";
import { db } from '../data/firebase'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { get, set } from "firebase/database";
import "./AdminPage.jsx";
import { useStore } from "../data/store";


function LandingPage() {
  const { addToCart } = useStore();
  const [storeList, setStoreList] = useState([]);


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

  return (
      
        <div className="wrap-produkt">
            {storeList.map((storeList) => (
                <div className="produkt-kort" key={storeList.id}>
                <img className="produkt-bild"src={storeList.image} alt={storeList.name} />
                <p className="produkt-namn">{storeList.name}</p>
                <p className="pris">{storeList.price}kr</p>
                <button className="köp-knapp" onClick={() => addToCart(storeList)}>Köp</button>
              </div>
            ))}
        </div>
  );
}

export default LandingPage;