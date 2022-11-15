import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="text-center my-16"
    >
      <div className="pt-14 pb-28">
        <div className="mb-4">
          <h2 className="font-bold text-primary">Contact Us</h2>
          <p className="text-3xl font-normal text-white">
            Stay connected with us
          </p>
        </div>
        <form>
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered input-md w-full max-w-xs mt-4 mb-4"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-md w-full max-w-xs mb-4"
          />
          <br />

          <textarea
            className="textarea textarea-bordered w-full max-w-xs mb-6"
            placeholder="Your message"
          ></textarea>
          <br />
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
