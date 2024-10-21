import { useState } from "react";
import { DayPicker } from "react-day-picker";
// import { format } from "date-fns";
import "react-day-picker/style.css";
import { dayPickerCss, weekdays, bookingTimes } from "../../constants";
import { BookingsContext } from "../../store/BookingContext";

const DatePicker = () => {
  const [selected, setSelected] = useState();
  const { order, setOrder } = BookingsContext();
  const css = dayPickerCss;

  const disabledDays = [
    new Date(2024, 10, 15),
    new Date(2024, 9, 12),
    new Date(2024, 9, 20),
    { dayOfWeek: [1] },
    { before: new Date() },
  ];
  const timeSelectedHandler = e => {
    const previouslySelected = document.querySelector(".timeSelected");
    if (previouslySelected) {
      if (previouslySelected === e.target) {
        previouslySelected.classList.remove("timeSelected");
        setOrder({
          ...order,
          dateStamp: "",
          date: "",
          time: "",
          day: pickedDate,
        });

        return;
      } else {
        previouslySelected.classList.remove("timeSelected");

        setOrder({
          ...order,
          dateStamp: "",
          date: "",
          time: "",
          day: pickedDate,
        });
      }
    }

    e.target.classList.add("timeSelected"); // add dark background to show its selected
    setOrder({
      ...order,
      dateStamp: new Date(selected),
      date: weekdays[pickedDay],
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
            {bookingTimes.map(time => (
              <input
                key={time.id}
                type="button"
                value={time.time}
                onClick={timeSelectedHandler}
                className="w-[28%] py-2 bg-primary rounded-lg cursor-pointer hover:bg-darkPrimary"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
