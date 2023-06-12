import { initializeApp } from "firebase/app";
import { getStorage, ref, list, getDownloadURL } from "firebase/storage";
import { swapToken } from "./nextPageSlice";
import { useDispatch } from "react-redux";

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
export const fetchapp = async (folder: string, pageToken = "") => {
  if (pageToken === undefined) {
    return [];
  }

  const listRef = ref(storage, `${folder}/`);

  const result = await list(listRef, {
    maxResults: 2,
    pageToken: pageToken,
  });
  const dataPromises = result.items.map((item) =>
    getDownloadURL(ref(storage, `${folder}/${item.name}`))
  );

  const data = await Promise.all(dataPromises);
  return data;
};
