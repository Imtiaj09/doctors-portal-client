import React from "react";
import { MutatingDots } from "react-loader-spinner";

const HomePageLoading = () => {
  return (
    <div className="h-screen flex justify-center items-center backdrop-blur-[9xl]">
      <MutatingDots
        height="100"
        width="100"
        color="#0FCFEC"
        secondaryColor="#19D3AE"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default HomePageLoading;
