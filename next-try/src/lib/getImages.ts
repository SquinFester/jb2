import { initializeApp } from "firebase/app";
import { getStorage, ref, list, getDownloadURL } from "firebase/storage";
import FIREBASE_CONFIG from "./firebase";

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);

export const storage = getStorage(app);

// Create a reference under which you want to list

// Find all the prefixes and items.
export const fetchapp = async (
  folder: string,
  pageToken: string | undefined
) => {
  if (pageToken === undefined) {
    return { urlList: [], nextPage: undefined };
    return;
  }

  const listRef = ref(storage, `${folder}/`);

  const response = await list(listRef, {
    maxResults: 20,
    pageToken: pageToken,
  });
  const dataPromises = response.items.map((item) =>
    getDownloadURL(ref(storage, `${folder}/${item.name}`))
  );

  const urlList = await Promise.all(dataPromises);
  const nextPage = response.nextPageToken;
  return { urlList, nextPage };
};
