import React from "react";

import "./faoliyatgaOidMeyoriyHujjat.scss";
import Hujjatlar from "./Hujjatlar";

import PrezidentFarmoni from "./prezidentFarmoni/PrezidentFarmoni";

function FaoliyatgaOidMeyoriyHujjat() {
  return (
    <div className="faoliyatgaOidMeyoriyHujjat container">
      <Hujjatlar />
      <hr style={{ marginBottom: "50px", marginTop: "100px" }} />
      <PrezidentFarmoni />
    </div>
  );
}

export default FaoliyatgaOidMeyoriyHujjat;
