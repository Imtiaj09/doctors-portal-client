import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center backdrop-blur-[9xl]">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#0FCFEC"
        color="#e15b64"
      />
    </div>
  );
};

export default Loading;
