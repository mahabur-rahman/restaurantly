import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Btn = ({ title }) => {
  return (
    <>
      <NavLink to="/">
        <Button>{title}</Button>
      </NavLink>
    </>
  );
};

export default Btn;
