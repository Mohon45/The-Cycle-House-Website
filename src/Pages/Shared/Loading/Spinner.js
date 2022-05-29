import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <span>Loading...</span>
      <div className="half-spinner"></div>
    </div>
  );
};

export default Spinner;
