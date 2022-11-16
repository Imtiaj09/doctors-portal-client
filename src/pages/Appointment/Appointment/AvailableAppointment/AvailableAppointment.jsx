import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentOptions");
      const data = await res.json();
      return data;
    },
  });

  //apadoto lgbe nh
  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  return (
    <section className="my-16">
      <p className="text-center font-bold text-secondary">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className=" mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option.id}
            appointmentOption={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
