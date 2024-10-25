import { useState } from "react";
import AdminOrderRow from "../../components/AdminOrderRow";
import AdminOrderHead from "../../components/AdminOrderHead";
import { BookingsContext } from "../../store/BookingContext";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Admin = () => {
  const { allOrders } = BookingsContext();
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  // Calculate total number of pages
  const totalPages = Math.ceil(allOrders.length / ordersPerPage);

  // Get current orders to display based on the page
  const currentOrders = allOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  // Pagination handler
  const goToPage = pageNumber => setCurrentPage(pageNumber);
  const goToNextPage = () => {
    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPages);
    } else setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-4 md:p-10 lg:p-20">
      <h2 className="text-[24px] font-semibold my-4">Orders</h2>
      <div className="">
        <AdminOrderHead />
        {allOrders.length === 0 && (
          <p className="text-center text-[18px] my-10">No current Orders</p>
        )}
        {currentOrders.map((order, i) => (
          <AdminOrderRow order={order} key={i} />
        ))}
      </div>

      {/* Pagination controls */}
      {allOrders.length > 0 && (
        <div className="flex justify-center items-center gap-4 my-6">
          <FaChevronCircleLeft
            size={28}
            onClick={goToPrevPage}
            className="cursor-pointer"
          />
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`${
                currentPage === i + 1
                  ? "font-semibold text-[18px] text-darkPrimary"
                  : ""
              }`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <FaChevronCircleRight
            size={28}
            onClick={goToNextPage}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Admin;
