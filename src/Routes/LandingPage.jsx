import LandingPageCard from "../components/LandingPageCard";
import "./LandingPage.css";
import { db } from '../data/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { get, set } from "firebase/database";


function LandingPage() {
  const [storeList, setStoreList] = useState([]);

  const storeListCollectionRef = collection(db, 'storeList');

  useEffect(() => {
  const getStoreList = async () => {
    try {
      const data = await getDocs(storeListCollectionRef);
      const filteredData = data.docs.map((doc) => ({   
        ...doc.data(),
        id: doc.id
      }));
      setStoreList(filteredData);
    } catch (error) {
      console.error("Error fetching store list:", error);
    }
  };

  getStoreList();

  }, []);

  return (
    <div className="App">
        <div>
            {storeList.map((storeList) => (
                <div key={storeList.id}>
                <img className="produkt-bild"src={storeList.image} alt={storeList.name} />
                <p className="produkt-namn">{storeList.name}</p>
                <p className="pris">{storeList.price}kr</p>
              </div>
            ))}
        </div>
    </div>
  );
}

export default LandingPage;