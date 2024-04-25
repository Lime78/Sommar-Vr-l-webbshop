import React from 'react';
import '../Routes/LandingPage.css';
import { db } from '../data/firebase'
import { getDocs, collection } from 'firebase/firestore'

function App() {
    const [storeList, setStoreList] = useState([]);

    const getStoreList = async () => {
        //läs data från firebase
        try {
            const data = await getDocs(storeListCollection);
            setStoreList(data.docs.map(doc => doc.data()));
        } 
        catch (error) {
            console.error('Error reading data from Firestore', error) 
        }
    }
  return (
    <div className="App">

    </div>
  )}

  export default App;