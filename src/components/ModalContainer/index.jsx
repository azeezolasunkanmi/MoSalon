import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { MdCancel } from "react-icons/md";

const ModalContainer = ({ children, open, onClose }) => {
  if (!open) return null;
  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50"
        onClick={onClose}
      ></div>
      <div className="fixed w-[90%] lg:w-[750px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lightPrimary p-4 z-50 rounded  max-h-[90vh] overflow-y-auto">
        <div onClick={onClose} className="flex justify-end cursor-pointer">
          <MdCancel size={25} />
        </div>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalContainer;
