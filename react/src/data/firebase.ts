import { initializeApp } from "firebase/app";
import { getStorage, ref, list, getDownloadURL } from "firebase/storage";
import FIREBASE_CONFIG from "./firebase-config";

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);

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
