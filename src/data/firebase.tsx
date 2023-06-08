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

const storage = getStorage(app);

// Create a reference under which you want to list
const listRef = ref(storage, "motory/");

// Find all the prefixes and items.
export const fetchapp = async () => {
  const data: string[] = [];
  const response = await list(listRef, { maxResults: 100 });
  response.items.forEach((item) => {
    getDownloadURL(ref(storage, `motory/${item.name}`)).then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = () => {
        xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();
      data.push(url);
    });
  });
  return data;
};
