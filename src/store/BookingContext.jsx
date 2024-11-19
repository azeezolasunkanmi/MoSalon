import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

const BookNowContext = createContext();

export const BookingContextProvider = ({ children }) => {
  const initialOrderState = {
    name: "",
    category: "",
    isInspo: false,
    inspoImage: "",
    imgUrl: "",
    service: "",
    note: "",
    dateStamp: "",
    add: "",
    price: "",
    weekday: "",
    time: "",
    status: "pending",
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [allOrders, setAllOrders] = useState([]);
  const [order, setOrder] = useState(initialOrderState);
  const [stickOnImageUrls, setStickOnImageUrls] = useState([]);
  const ordersCollectionRef = collection(db, "orders");

  const storeImage = async () => {
    const storageRef = ref(
      storage,
      `user_id_images/${order.name}/${selectedFile.name}`
    );

    try {
      const snapshot = await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      if (downloadURL) {
        // Update the order with the image URL and wait for state update
        const updatedOrder = { ...order, imgUrl: downloadURL };
        setOrder(updatedOrder);

        // Add the order to Firestore after the image URL is updated
        // await addOrders(updatedOrder);
        console.log("completed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const addOrders = async data => {
    await addDoc(ordersCollectionRef, data);
  };

  // Function to fetch all image URLs from firebase
  const fetchAllImages = async folderPath => {
    const folderRef = ref(storage, folderPath); // Reference to the folder
    const urls = []; // Array to store the image URLs

    try {
      const result = await listAll(folderRef); // List all items in the folder

      // Loop through each item and get its URL
      for (const itemRef of result.items) {
        const url = await getDownloadURL(itemRef);
        urls.push(url);
      }

      return urls; // Return array of image URLs
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  };

  const getOrders = async () => {
    try {
      const data = await getDocs(ordersCollectionRef);
      const filteredData = data.docs.map(doc => ({
        ...doc.data(),
        docId: doc.id,
      }));
      setAllOrders(filteredData);
      // console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  // Update user information
  const updateUser = async (id, data) => {
    try {
      const userDoc = doc(db, "orders", id);
      await updateDoc(userDoc, data);
      getOrders();
    } catch (error) {
      console.error("Error updating user: ", error);
      throw error;
    }
  };

  // Function to group orders by dateStamp
  const groupOrdersByDateStamp = () => {
    return allOrders
      .filter(order => order.status === "paid")
      .reduce((acc, order) => {
        const key = order.dateStamp;

        // If the group for this dateStamp doesn't exist, create it
        if (!acc[key]) {
          acc[key] = [];
        }

        // Add the order to the correct group
        acc[key].push(order);

        return acc;
      }, {});
  };

  // 2. Function to return dateStamps that occur six or more times
  const getDisabledDays = () => {
    const dateStampCount = allOrders
      .filter(order => order.status === "paid")
      .reduce((acc, order) => {
        const key = order.dateStamp;

        // Count the occurrences of each dateStamp
        if (!acc[key]) {
          acc[key] = 0;
        }
        acc[key]++;

        return acc;
      }, {});

    // Get the dateStamps that occur 6 or more times
    return Object.keys(dateStampCount).filter(key => dateStampCount[key] >= 6);
  };

  useEffect(() => {
    getOrders();
    fetchAllImages("acrylic").then(urls => {
      setStickOnImageUrls(urls); // Array of image URLs
      console.log(urls);
    });
  }, []);

  return (
    <BookNowContext.Provider
      value={{
        allOrders,
        order,
        setOrder,
        setSelectedFile,
        storeImage,
        addOrders,
        getDisabledDays,
        groupOrdersByDateStamp,
        updateUser,
        stickOnImageUrls,
      }}
    >
      {children}
    </BookNowContext.Provider>
  );
};

export const BookingsContext = () => {
  return useContext(BookNowContext);
};

BookingContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
