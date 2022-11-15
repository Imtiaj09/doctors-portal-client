import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      style={{
        background: `url(${bg})`,
      }}
      className="my-6"
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="dentist chair"
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="me-6 shadow rounded-2xl">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
