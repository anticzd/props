import React from "react";
import Child from "./Child";
import ClassChild from "./ClassChild";

export default function Parent() {
  return (
    <div>
      <Child ime="David" dob={28} />
      <ClassChild grad="Zadar" />
    </div>
  );
}
