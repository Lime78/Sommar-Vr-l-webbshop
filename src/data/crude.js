async function deleteMerchItem(key) {
    const docRef = doc(collectionRef, key);
    deleteDoc(docRef)
}

export { deleteMerchItem }