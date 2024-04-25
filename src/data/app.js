// import { useEffect, useState } from 'react'
// import { db } from './firebase'
// import { getDocs, collection } from 'firebase/firestore'

// function App() {
//   const [storeList, setStoreList] = useState([]);

//   const storeListCollectionRef = collection(db, 'storeList');
//   useEffect(() => {
//       getStoreList();
 
//   const getStoreList = async () => {
//       //läs data från firebase 
//         const data = await getDocs(storeListCollectionRef);
        
//           setStoreList(data.docs.map(doc => doc.data()));

//   }
  
//   getStoreList();
// }, []);

// return (
//   <div className="App">

//   </div>
// )}

// export default App