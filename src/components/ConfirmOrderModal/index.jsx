import PropTypes from "prop-types";
import ModalContainer from "../ModalContainer";
import { FaWhatsapp, FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { BookingsContext } from "../../store/BookingContext";

const ConfirmOrderModal = ({ openModal, onClose }) => {
  const [meansOfCommunication, setMeansOfCommunication] = useState();
  const { order } = BookingsContext();

  return (
    <ModalContainer open={openModal} onClose={onClose}>
      <div className="flex flex-col gap-6 md:p-4">
        <div>
          <h2 className="text-tertiary text-[24px] font-semibold">
            Generate Invoice
          </h2>
        </div>
        <div>
          <p className="text-tertiary font-semibold capitalize mb-2 text-[18px]">
            Hello {order && order.name},
          </p>
          <p className="text-[18px]">
            Please select your preffered mode of communication below and an
            invoice will be generated and sent to you.
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
            />
          </div>
        )}
        <div>
          <p>
            You booked for an {order && order.category} section on{" "}
            {order && order.date} {order && order.day} October at{" "}
            {order && order.time}
          </p>
          <p></p>
        </div>
        <div>
          <button className="bg-darkPrimary hover:bg-primary px-6 py-2 rounded font-medium">
            Send me my bill
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
