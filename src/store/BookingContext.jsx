import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { allBookings } from "../constants";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

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
  const [bookings, setBookings] = useState([]);
  const [order, setOrder] = useState(initialOrderState);
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

  useEffect(() => {
    setBookings(allBookings);
  }, []);

  return (
    <BookNowContext.Provider
      value={{
        bookings,
        setBookings,
        order,
        setOrder,
        setSelectedFile,
        storeImage,
        addOrders,
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
