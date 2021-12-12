import React from "react";
import "./heading.scss";

const Heading = (props) => {
  const { titleOne, titleTwo } = props;
  return (
    <>
      <div className="heading">
        <h5>{titleOne}</h5>
        <h2>{titleTwo}</h2>
      </div>
    </>
  );
};

export default Heading;
