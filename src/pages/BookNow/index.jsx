import DatePicker from "../../components/DatePicker";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import BookingForm from "../../components/BookingForm";
import ConfirmOrderModal from "../../components/ConfirmOrderModal";
import { useState } from "react";

const BookNow = () => {
  const [openModal, setOpenModal] = useState(false);

  // Handle form submission
  // const onSubmit = data => {
  //   setOrder({ ...order, ...data });
  //   setOpenModal(true);
  //   console.log("Form submitted:", data);
  // };

  return (
    <>
      <PageHeader
        title="Book  Now"
        src="https://img.freepik.com/free-photo/blle-leaf-orange-background-with-copy-space_23-2148317557.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
        desc="Schedule an appointment with us today. 🩷"
      />
      <div className="p-4">
        <p className="p-4 text-center text-secondary bg-darkPrimary rounded-sm max-w-[700px] mx-auto my-8">
          Notice: Extra Designs/Services would attract an additional fee. click
          here to view price list
        </p>
        <div className="lg:flex justify-center gap-10 mt-10 md:mt-20">
          <div className="flex justify-center mb-10 overflow-hidden bg-white p-4 box-shadow pb-10">
            <BookingForm />
          </div>
          <div className="flex justify-center">
            <DatePicker />
          </div>
        </div>
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
