import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import BookingForm from "../../components/BookingForm";
import ConfirmOrderModal from "../../components/ConfirmOrderModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const BookNow = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <PageHeader
        title="Book  Now"
        src="https://img.freepik.com/free-photo/blle-leaf-orange-background-with-copy-space_23-2148317557.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
        desc="Schedule an appointment with us today. 🩷"
      />
      <div className="p-4">
        <p className="p-4 text-center text-secondary bg-darkPrimary rounded-sm max-w-[700px] mx-auto my-8">
          Notice: Extra Designs/Services would attract an additional fee.{" "}
          <Link className="text-white underline" to="/price">
            click here
          </Link>{" "}
          to view price list
        </p>
        <BookingForm setOpenModal={setOpenModal} />
      </div>
      <Footer />

      {/* MODAL */}
      <ConfirmOrderModal
        openModal={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default BookNow;
