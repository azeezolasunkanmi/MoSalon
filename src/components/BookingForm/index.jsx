import { nailCategories, nailsServicesAndPrices } from "../../constants";
import { BookingsContext } from "../../store/BookingContext";
import DatePicker from "../DatePicker";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";

// Define the Zod schema for validation
const bookingSchema = z.object({
  name: z.string().min(1, "Input a name"),
  category: z.string().min(1, "Select a category"),
  service: z.string().min(1, "Select a service"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't exceed 15 digits")
    .regex(/^\+?\d+$/, "Invalid Phone format"),
  note: z.string().optional(),
});

const BookingForm = ({ setOpenModal }) => {
  const { order, setOrder } = BookingsContext();

  // Initialize useForm with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: order.name,
      category: order.category,
      service: order.service,
      note: order.note,
      phone: order.phone,
    },
  });

  const onSubmit = data => {
    setOrder({ ...order, ...data });
    if (order.dateStamp === "" || order.time === "") {
      // console.log("select date and time");
    } else {
      setOpenModal(true);
      // console.log("Form submitted:", order);
    }
  };

  const determinePrice = val => {
    const selectedService = nailsServicesAndPrices.find(
      service => service.name === val
    );

    if (selectedService) {
      return selectedService.price;
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === "service") {
      setOrder({
        ...order,
        [name]: value,
        price: determinePrice(value),
      });
    } else {
      setOrder({
        ...order,
        [name]: value,
      });
    }
  };

  return (
    <form>
      <div className="lg:flex justify-center gap-10 mt-10 md:mt-20 w-full">
        <div className="flex justify-center mb-10 overflow-hidden bg-white p-4 box-shadow pb-10">
          <div className="text-tertiary flex flex-col gap-4 mt-6 shrink-0 w-full md:w-[400px] font-medium">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                {...register("name")}
                name="name"
                type="text"
                value={order.name}
                placeholder="what would you like us to call you?"
                className="p-2 bg-lightPrimary outline-none"
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-red-500 text-[14px]">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Number Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone no</label>
              <input
                {...register("phone")}
                name="phone"
                type="tel"
                value={order.phone}
                placeholder="Enter a valid mobile number"
                className="p-2 bg-lightPrimary outline-none"
                onChange={handleInputChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-[14px]">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Category Field */}
            <div className="flex flex-col gap-2">
              <p>Select Category</p>
              <select
                {...register("category")}
                name="category"
                id="category"
                value={order.category}
                className="p-2 bg-lightPrimary outline-none"
                onChange={handleInputChange}
              >
                <option value="" />
                {nailCategories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-[14px]">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Service Selection */}
            {!order.isInspo && (
              <div className="flex flex-col gap-2">
                <p>Select Service</p>
                <select
                  {...register("service")}
                  name="service"
                  id="service"
                  value={order.service}
                  className="p-2 bg-lightPrimary outline-none"
                  onChange={handleInputChange}
                >
                  <option value="" />
                  {order.category === "acrylic" &&
                    nailsServicesAndPrices
                      .filter(service => service.category === "acrylic")
                      .map((cat, i) => (
                        <option key={i} value={cat.name}>
                          {cat.name} (&#8358;{cat.price})
                        </option>
                      ))}
                  {order.category === "gel" &&
                    nailsServicesAndPrices
                      .filter(service => service.category === "gel")
                      .map((cat, i) => (
                        <option key={i} value={cat.name}>
                          {cat.name} (&#8358;{cat.price})
                        </option>
                      ))}
                  {order.category === "stick-on" &&
                    nailsServicesAndPrices
                      .filter(service => service.category === "stick-on")
                      .map((cat, i) => (
                        <option key={i} value={cat.name}>
                          {cat.name} (&#8358;{cat.price})
                        </option>
                      ))}
                  {order.category === "biab" &&
                    nailsServicesAndPrices
                      .filter(service => service.category === "biab")
                      .map((cat, i) => (
                        <option key={i} value={cat.name}>
                          {cat.name} (&#8358;{cat.price})
                        </option>
                      ))}
                  {order.category === "maintenance" &&
                    nailsServicesAndPrices
                      .filter(service => service.category === "maintenance")
                      .map((cat, i) => (
                        <option key={i} value={cat.name}>
                          {cat.name} (&#8358;{cat.price})
                        </option>
                      ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-[14px]">
                    {errors.service.message}
                  </p>
                )}
              </div>
            )}

            {/* Note Field */}
            <div className="my-4">
              <textarea
                {...register("note")}
                id="textarea"
                name="note"
                rows="4"
                placeholder="add a note..."
                className="w-full p-2 bg-lightPrimary rounded-lg outline-none"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <DatePicker />
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <button
          className="px-6 py-2 bg-primary rounded-sm text-[18px] font-semibold"
          onClick={handleSubmit(onSubmit)}
        >
          Continue
        </button>
      </div>
    </form>
  );
};

BookingForm.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};

export default BookingForm;
