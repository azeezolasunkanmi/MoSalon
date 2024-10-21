import PropTypes from "prop-types";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BookingsContext } from "../../store/BookingContext";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "../../firebase";

const UploadImage = ({ register }) => {
  const { order, setOrder, setSelectedFile } = BookingsContext();

  const handleImageChange = e => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(e.target.files?.[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (result && typeof result === "string") {
          const updatedOrder = { ...order, inspoImage: result };
          setOrder(updatedOrder);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // async function handleImageFile(e) {
  //   const file = e.target.files?.[0];
  //   const storageRef = ref(
  //     storage,
  //     `user_id_images/${order.name}/${file.name}`
  //   );

  //   try {
  //     const snapshot = await uploadBytes(storageRef, file);
  //     const downloadURL = await getDownloadURL(snapshot.ref);
  //     setOrder({ ...order, imgUrl: downloadURL });

  //     console.log("completed");
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // }

  return (
    <div className="h-[180px] flex justify-start gap-6">
      <div className="w-[40%] md:w-[180px] h-full bg-[#F5F7F9] shrink-0 rounded-xl overflow-hidden">
        {order["inspoImage"] && (
          <img
            src={order["inspoImage"]}
            alt="nail pic"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="w-[40%] md:w-[180px] h-full bg-[#Fff] shrink-0 border-2 border-dashed border-primary rounded-xl">
        <div className="relative flex items-center gap-2 justify-center flex-col w-full h-full">
          <AiOutlineCloudUpload color="#D9D9D9" />
          <p className="text-[11px] font-light text-center text-[#A3A3A3]">
            Png Jpg and Gif files allowed
          </p>
          <button
            type="button"
            className="px-4 rounded-md bg-[#009FE3] shrink-0 text-[12px] text-white"
          >
            Choose pic
          </button>
          <input
            {...register("inspoImage")}
            onChange={handleImageChange}
            type="file"
            id="img"
            value={order.ispoImage}
            name="img"
            accept="image/*"
            className="absolute left-0 top-0 w-full h-full cursor-pointer opacity-0"
          ></input>
        </div>
      </div>
    </div>
  );
};

UploadImage.propTypes = {
  register: PropTypes.func.isRequired,
};

export default UploadImage;
