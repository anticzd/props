import React from "react";

export default function Child(props) {
  return (
    <>
      <p>Zovem se {props.ime} </p>
      <p> Imam {props.dob} godina. </p>
    </>
  );
}
