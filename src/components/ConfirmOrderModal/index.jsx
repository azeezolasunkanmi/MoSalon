import PropTypes from "prop-types";
import ModalContainer from "../ModalContainer";
import { useNavigate } from "react-router-dom";
// import {
//   FaWhatsapp,
//   FaTiktok,
//   FaInstagram,
//   FaFacebookF,
//   FaPhoneAlt,
// } from "react-icons/fa";
import { useState } from "react";
import { BookingsContext } from "../../store/BookingContext";
import { format } from "date-fns";
import { HiOutlineClipboardDocument } from "react-icons/hi2";

const ConfirmOrderModal = ({ openModal, onClose }) => {
  // const [meansOfCommunication, setMeansOfCommunication] = useState();
  const { order, setOrder, addOrders } = BookingsContext();
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  let pickedDate = order.dateStamp ? <>{format(order.dateStamp, "PP")}</> : "";
  const copyToClipboard = () => {
    const textToCopy = document.querySelector(".text-to-copy");
    navigator.clipboard.writeText(textToCopy.innerText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };

  const sender = async () => {
    const message = `
    BOOKING
    name: ${order.name},
    category: ${order.category},
    service: ${order.service},
    date: ${order.dateStamp},
    contact: ${order.phone},
    price: ${order.price},
    time: ${order.time},
    note: ${order.note}
    
  `;
    const telegram_bot_id = import.meta.env.VITE_TELEGRAM_BOT_ID;
    const chat_id = import.meta.env.VITE_CHAT_ID;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
          },
          body: JSON.stringify({
            chat_id: chat_id,
            text: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const sender2 = async () => {
    const message = `
    BOOKING
    name: ${order.name},
    category: ${order.category},
    service: ${order.service},
    date: ${order.dateStamp},
    contact: ${order.phone},
    price: ${order.price},
    time: ${order.time},
    note: ${order.note}
    
  `;
    const telegram_bot_id = import.meta.env.VITE_TELEGRAM_BOT_ID2;
    const chat_id = import.meta.env.VITE_CHAT_ID2;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
          },
          body: JSON.stringify({
            chat_id: chat_id,
            text: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async () => {
    setIsLoading(true);
    try {
      if (order) {
        await addOrders(order);
        await sender();
        await sender2();
        alert("Your order is currently awaiting confirmation");
        setIsLoading(false);
        setOrder(initialOrderState);
        navigate("/");
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("An error occurred while submitting the order:", error);
      alert(
        "There was an issue submitting your order. Please try again later."
      );
    }
  };

  return (
    <ModalContainer open={openModal} onClose={onClose}>
      <div className="flex flex-col gap-6 md:p-4">
        <div>
          <h2 className="text-darkPrimary text-[24px] font-semibold">
            Payment
          </h2>
        </div>
        <div className="">
          <p className="text-tertiary font-semibold capitalize mb-2 text-[18px]">
            Hello {order && order.name},
          </p>
          <div>
            <p className="text-[18px] text-tertiary">
              You booked for {order && order.category} section
            </p>
          </div>
          <div className="flex gap-8 mt-4">
            <p>Date:</p>
            <p className="text-tertiary font-bold text-[18px]">{pickedDate}</p>
          </div>
          <div className="flex gap-8 mt-4">
            <p>Time:</p>
            <p className="text-tertiary font-bold text-[18px]">
              {" "}
              {order && order.time}
            </p>
          </div>
          <div className="flex gap-8 mt-4">
            <p>Price:</p>
            <p className="text-tertiary font-bold text-[18px]">
              &#8358; {order && order.price}
            </p>
          </div>
          <div className="flex gap-8 mt-4">
            <p>Bank:</p>
            <p className="text-tertiary font-bold text-[18px]">
              Moniepoint Microfinance Bank
            </p>
          </div>
          <div className="flex gap-8 mt-4">
            <p>Account Number:</p>
            <p className="text-tertiary font-bold text-[18px] text-to-copy">
              8272601960
            </p>
            <HiOutlineClipboardDocument
              onClick={copyToClipboard}
              size={22}
              className="cursor-pointer"
            />
          </div>
          {copied && <p className="text-green-500 ml-2 text-center">Copied!</p>}

          <div className="flex gap-8 mt-4">
            <p>Account Name:</p>
            <p className="text-tertiary font-bold text-[18px]">
              Polish_me_by_mo
            </p>
          </div>

          <p className="mt-10">
            You must make an initial deposit of at least{" "}
            <span className="text-darkPrimary font-semibold">&#8358;5000 </span>{" "}
            to confirm your booking.
          </p>
          {/* <p className=" mt-4">
            Select your preffered mode of communication below and a confirmation
            message would be sent to you after we receive payments.
          </p> */}
        </div>
        {/* <div className="flex gap-6">
          <span>
            <FaWhatsapp
              size={24}
              className="hover:text-darkPrimary hover:scale-150"
              onClick={() => setMeansOfCommunication("whatsapp")}
            />
          </span>
          <span>
            <FaTiktok
              size={24}
              className="hover:text-darkPrimary hover:scale-150"
              onClick={() => setMeansOfCommunication("tiktok")}
            />
          </span>
          <span>
            <FaInstagram
              size={24}
              className="hover:text-darkPrimary hover:scale-150"
              onClick={() => setMeansOfCommunication("instagram")}
            />
          </span>
          <span>
            <FaFacebookF
              size={24}
              className="hover:text-darkPrimary hover:scale-150"
              onClick={() => setMeansOfCommunication("facebook")}
            />
          </span>
          <span>
            <FaPhoneAlt
              size={24}
              className="hover:text-darkPrimary hover:scale-150"
              onClick={() => setMeansOfCommunication("phone number")}
            />
          </span>
        </div> */}
        {/* {meansOfCommunication && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="capitalize font-medium text-tertiary"
            >
              {meansOfCommunication}
            </label>
            <input
              type="text"
              placeholder={`Input your ${meansOfCommunication}`}
              className="p-2 outline-none"
              onChange={e =>
                setOrder({
                  ...order,
                  add: `${meansOfCommunication}  ${e.target.value}`,
                })
              }
            />
          </div>
        )} */}
        {/* {order.add === "" && (
          <p className="text-red-400">
            Click on the icon above and provide the contact information from the
            options above
          </p>
        )} */}

        <div>
          <button
            className="bg-darkPrimary hover:bg-primary px-6 py-2 rounded font-medium"
            onClick={submitHandler}
            disabled={isLoading}
          >
            {isLoading ? "Submitting" : "Click here after transfer"}
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

ConfirmOrderModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ConfirmOrderModal;
