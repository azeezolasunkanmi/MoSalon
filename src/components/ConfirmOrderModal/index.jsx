import PropTypes from "prop-types";
import ModalContainer from "../ModalContainer";
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { useState } from "react";
import { BookingsContext } from "../../store/BookingContext";
import { format } from "date-fns";
import { HiOutlineClipboardDocument } from "react-icons/hi2";

const ConfirmOrderModal = ({ openModal, onClose }) => {
  const [meansOfCommunication, setMeansOfCommunication] = useState();
  const { order, setOrder } = BookingsContext();
  const [copied, setCopied] = useState(false);

  let pickedDate = order.dateStamp ? <>{format(order.dateStamp, "PP")}</> : "";
  const copyToClipboard = () => {
    const textToCopy = document.querySelector(".text-to-copy");
    navigator.clipboard.writeText(textToCopy.innerText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };

  const submitHandler = () => {
    if (!order.add) {
      console.log("input address");
    } else console.log(order);
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
            You must make an initial deposit of{" "}
            <span className="text-darkPrimary font-semibold">&#8358;5000 </span>{" "}
            to confirm your booking.
          </p>
          <p className=" mt-4">
            Select your preffered mode of communication below and a confirmation
            message would be sent to you after we receive payments.
          </p>
        </div>
        <div className="flex gap-6">
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
        </div>
        {meansOfCommunication && (
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
        )}
        {order.add === "" && <p>Pick one of the options above</p>}

        <div>
          <button
            className="bg-darkPrimary hover:bg-primary px-6 py-2 rounded font-medium"
            onClick={submitHandler}
          >
            Click here after transfer
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
