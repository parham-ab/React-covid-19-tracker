import React from "react";
// img
import loader from "../assets/img/loader.gif";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loader} alt="Loading" />
    </div>
  );
};

export default Loading;
