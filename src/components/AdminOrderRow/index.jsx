import { useState } from "react";
import { BookingsContext } from "../../store/BookingContext";
import { FaCheckCircle, FaPauseCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const AdminOrderRow = ({ order }) => {
  const { updateUser, groupOrdersByDateStamp } = BookingsContext();
  const [loading, setLoading] = useState(false); // Loading state

  const confirmOrder = async () => {
    setLoading(true); // Set loading to true when the update starts
    const bookings = groupOrdersByDateStamp();
    const selectedDate = order.dateStamp;
    // Check if the selected date exists in bookings
    if (bookings[selectedDate]) {
      const bookedTimes = bookings[selectedDate].map(booking => booking.time);
      if (bookedTimes.includes(order.time)) {
        setLoading(false);
        alert("time already booked");
        return;
      }
    }

    try {
      await updateUser(order.docId, {
        status: "paid",
      });
      alert("Order successfully added");
    } catch (err) {
      alert("Failed to confirm order"); // Set error message on failure
      console.log(err);
    } finally {
      setLoading(false); // Set loading to false once the process is finished
    }
  };

  const pendOrder = async () => {
    setLoading(true); // Set loading to true when the update starts

    try {
      await updateUser(order.docId, {
        status: "pending",
      });
      alert("Order awaiting payment");
    } catch (err) {
      alert("Failed to pend order"); // Set error message on failure
      console.log(err);
    } finally {
      setLoading(false); // Set loading to false once the process is finished
    }
  };

  return (
    <div className="flex justify-between items-center my-2 py-4 px-2 border-b-2 text-tertiary">
      <p className="w-[18%]">{order.name}</p>
      <p className="w-[20%]">{order.service}</p>
      <p className="w-[15%]">{order.dateStamp}</p>
      <p className="w-[10%]">{order.time}</p>
      <p className="w-[10%]">&#8358; {order.price}</p>
      <p
        className={`w-[10%] ${
          order.status === "paid" ? "text-green-500" : "text-orange-400"
        }`}
      >
        {order.status}
      </p>
      <div className="w-[7%] flex gap-8 items-center">
        {loading ? (
          <div className="border-4 border-t-4 border-gray-200 rounded-full w-6 h-6 animate-spin border-t-blue-500"></div>
        ) : order.status === "paid" ? (
          <FaPauseCircle
            size={28}
            color="orange"
            onClick={pendOrder}
            className="cursor-pointer"
          />
        ) : (
          <FaCheckCircle
            size={28}
            color="green"
            onClick={confirmOrder}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

AdminOrderRow.propTypes = {
  order: PropTypes.object.isRequired,
};

export default AdminOrderRow;
