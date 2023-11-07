import React from "react";
// scss
import "./umumiyMalumot.scss";
// components
import Umumiy from "./Umumiy";
import UmumMeyoriyHujjat from "./umumMeyoriyHujjat/UmumMeyoriyHujjat";

function UmumiyMalumot() {
  return (
    <div className="umumiyMalumot container">
      <Umumiy />
      <hr />
      <UmumMeyoriyHujjat />
    </div>
  );
}

export default UmumiyMalumot;
