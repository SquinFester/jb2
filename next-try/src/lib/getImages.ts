import { initializeApp } from "firebase/app";
import { getStorage, ref, list, getDownloadURL } from "firebase/storage";
import FIREBASE_CONFIG from "./firebase";

// Initialize Firebase

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.NFIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_SORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSSING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

// Create a reference under which you want to list

// Find all the prefixes and items.

type FetchedDataType = {
  urlList: string[];
  nextPage: string | undefined;
};

export const fetchapp = async (
  folder: string,
  pageToken: string | undefined,
  limit: number
) => {
  if (pageToken === undefined) {
    return { urlList: [], nextPage: undefined } as FetchedDataType;
  }

  const listRef = ref(storage, `${folder}/`);

  const response = await list(listRef, {
    maxResults: limit,
    pageToken: pageToken,
  });
  const dataPromises = response.items.map((item) =>
    getDownloadURL(ref(storage, `${folder}/${item.name}`))
  );

  const urlList = await Promise.all(dataPromises);

  const nextPage = response.nextPageToken;
  return { urlList, nextPage } as FetchedDataType;
};
