import firebase, { initializeApp } from "firebase/app";
import { getStorage, ref, list, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrlTd69mX2tf5XyOyucb1BptyBjvQN3ug",
  authDomain: "jeremiboracki.firebaseapp.com",
  projectId: "jeremiboracki",
  storageBucket: "jeremiboracki.appspot.com",
  messagingSenderId: "526442525300",
  appId: "1:526442525300:web:ef4c4962c6fcf39f521721",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

// Create a reference under which you want to list

// Find all the prefixes and items.
export const fetchapp = async (folder: string) => {
  const listRef = ref(storage, `${folder}/`);

  const response = await list(listRef, { maxResults: 100 });
  const dataPromises = response.items.map((item) =>
    getDownloadURL(ref(storage, `${folder}/${item.name}`))
  );
  const data = await Promise.all(dataPromises);
  return data;
};
