import { db } from "@/config";
import { Dress } from "@/types/Dress";
import { collection, getDocs } from "firebase/firestore";

export const fetchCollection = async () => {
  try {
    const colRef = collection(db, "collection");
    const snapshot = await getDocs(colRef);
    const data = snapshot.docs.map((doc) => {
      const docData = doc.data();
      return {
        id: doc.id,
        title: docData.title,
        price: docData.price,
        description: docData.description,
        image_url_1: docData.image_url_1,
        image_url_2: docData.image_url_2,
        image_url_3: docData.image_url_3,
        image_url_4: docData.image_url_4,
        image_url_5: docData.image_url_5,
        sizes: docData.sizes,
      } as Dress;
    });
    return data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};
