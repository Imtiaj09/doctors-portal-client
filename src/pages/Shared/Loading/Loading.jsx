import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="0000FF"
        barColor="#18d2b3"
      />
    </div>
  );
};

export default Loading;
