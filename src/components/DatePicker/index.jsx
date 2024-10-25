import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
// import { format } from "date-fns";
import "react-day-picker/style.css";
import { dayPickerCss, weekdays, bookingTimes } from "../../constants";
import { BookingsContext } from "../../store/BookingContext";

const DatePicker = () => {
  const [selected, setSelected] = useState();
  const [availableTime, setAvailableTime] = useState(bookingTimes);
  const { order, setOrder, getDisabledDays, groupOrdersByDateStamp } =
    BookingsContext();
  const css = dayPickerCss;

  const getDisableDays = getDisabledDays().map(
    dateString => new Date(dateString)
  );
  const disabledDays = [
    ...getDisableDays,
    { dayOfWeek: [1] }, // Disable all Mondays
    { before: new Date() }, // Disable all dates before today
  ];

  const getAvailableTimeSlots = () => {
    // check for free time when a user selects a date
    const bookings = groupOrdersByDateStamp();
    const selectedDate = new Date(selected).toLocaleDateString();

    // Check if the selected date exists in bookings
    if (bookings[selectedDate]) {
      const bookedTimes = bookings[selectedDate].map(booking => booking.time);

      // Filter out the booked times from the available time slots
      const freeSlots = bookingTimes.filter(
        slot => !bookedTimes.includes(slot.time)
      );

      setAvailableTime(freeSlots);
    } else {
      // If the date isn't booked yet, all time slots are available
      setAvailableTime(bookingTimes);
    }
  };
  useEffect(() => {
    getAvailableTimeSlots();
  }, [selected]);

  const timeSelectedHandler = e => {
    const previouslySelected = document.querySelector(".timeSelected");
    if (previouslySelected) {
      if (previouslySelected === e.target) {
        previouslySelected.classList.remove("timeSelected");
        setOrder({
          ...order,
          dateStamp: "",
          weekday: "",
          time: "",
          day: "",
        });

        return;
      } else {
        previouslySelected.classList.remove("timeSelected");

        setOrder({
          ...order,
          dateStamp: "",
          weekday: "",
          time: "",
          day: "",
        });
      }
    }

    e.target.classList.add("timeSelected"); // add dark background to show its selected
    setOrder({
      ...order,
      dateStamp: new Date(selected).toLocaleDateString(),
      weekday: weekdays[pickedDay],
      time: e.target.value,
      day: pickedDate,
    });
  };

  let pickedDay = new Date(selected).getDay();
  let pickedDate = new Date(selected).getDate();

  // let pickedDate = selected ? <p>{format(selected, "PP")}</p> : "";

  return (
    <div>
      <style>{css}</style>
      <div className="flex justify-center">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          disabled={disabledDays}
          modifiersClassNames={{
            selected: "my-selected",
            today: "my-today",
            disabled: "my-disabled",
          }}
          // footer={
          //   selected
          //     ? `Selected: ${selected.toLocaleDateString()}`
          //     : "Pick a day."
          // }
        />
      </div>
      {selected && (
        <div className="w-full slide-in-bottom">
          <h2 className="text-center my-4 text-[18px]">
            {weekdays[pickedDay]} {pickedDate}
          </h2>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {availableTime.map(slot => (
              <input
                key={slot.id}
                type="button"
                value={slot.time}
                onClick={timeSelectedHandler}
                className="w-[28%] py-2 bg-primary rounded-lg cursor-pointer hover:bg-darkPrimary"
              />
            ))}
          </div>
        </div>
      )}
      {(!order.dateStamp || !order.time) && (
        <div className="mt-4">
          <h2 className="text-center my-4 text-red-400">
            Select date and time
          </h2>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
