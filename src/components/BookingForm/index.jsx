import { nailCategories, nailsServicesAndPrices } from "../../constants";
import UploadImage from "../UploadImage";
import { BookingsContext } from "../../store/BookingContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the Zod schema for validation
const bookingSchema = z.object({
  name: z.string().min(1, "Input a name"),
  category: z.string().min(1, "Select a category"),
  isInspo: z.boolean(),
  inspoImage: z.string().optional(),
  service: z.string().optional(),
  note: z.string().optional(),
});

const BookingForm = () => {
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
      isInspo: order.isInspo,
      inspoImage: order.inspoImage,
      service: order.service,
      note: order.note,
    },
  });

  const onSubmit = data => {
    setOrder({ ...order, ...data });
    console.log("Form submitted:", data);
    console.log("Form submitted:", order);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  return (
    <form className="text-tertiary flex flex-col gap-4 mt-6 shrink-0 w-full md:w-[400px] font-medium">
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
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Inspo Section */}
      {order.category && (
        <div className="flex justify-between items-center p-2">
          <p>Do you have an inspo?</p>
          <div className="flex gap-4 items-center">
            <p
              onClick={() =>
                setOrder({
                  ...order,
                  isInspo: true,
                  service: "",
                })
              }
              className={`py-2 px-4 rounded-md cursor-pointer ${
                order.isInspo ? "bg-darkPrimary text-white" : "bg-primary"
              } `}
            >
              Yes
            </p>
            <p
              onClick={() =>
                setOrder({
                  ...order,
                  isInspo: false,
                })
              }
              className={`py-2 px-4 rounded-md cursor-pointer ${
                !order.isInspo ? "bg-darkPrimary text-white" : "bg-primary"
              }`}
            >
              No
            </p>
          </div>
        </div>
      )}
      {order.isInspo && (
        <div>
          <p className="my-4">Upload Inspo</p>
          <UploadImage register={register} />
          {errors.inspoImage && (
            <p className="text-red-500">{errors.inspoImage.message}</p>
          )}
        </div>
      )}

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
            <p className="text-red-500">{errors.service.message}</p>
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

      <div className="flex justify-center mt-4">
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

export default BookingForm;
