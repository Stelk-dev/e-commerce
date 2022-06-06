import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function getProducts(){
    const coll = collection(db, "products");
    const response = await getDocs(coll);

    return response.docs.map(e => e.data());
}