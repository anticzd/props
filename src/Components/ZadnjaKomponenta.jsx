import React from "react";
import { PropTypes } from "prop-types";

const PropTypesPrimjer = ({ ime, dob, spol, zvanje, adresa }) => {
  return (
    <>
      ime: {ime}, dob: {dob}, spol: {spol}, zvanje: {zvanje}, adresa: {adresa}
    </>
  );
};

PropTypesPrimjer.defaultProps = {
  spol: "M",
};

export default PropTypesPrimjer;
