import React from "react";
import "./SSBmeyoriyHujjat.scss";

import medic from "../../../assets/images/medic.png";

function SSBmeyoriyHujjat() {
  return (
    <div className="SSBMeyoriyHujjatlar container">
      <h1>Faoliyatga oid me’yoriy hujjatlar</h1>
      <div className="row">
        <div className="col">
          <div className="desc">
            <h3>
              O’zbekiston Respublikasi Prezidentining 2022 yil 30 dekabrdagi
              “O’zbekiston...
            </h3>
            <button className="download">
              <i class="fa fa-download" aria-hidden="true"></i>{" "}
              <span>Yuklab olish</span>
            </button>
            <p>
              <span>18:00</span> <span>05 noyabr</span>
            </p>
          </div>
          <div className="img">
            <img src={medic} />
          </div>
        </div>
        <div className="col">
          <div className="desc">
            <h3>
              Innovatsion sog‘liqni saqlash milliy palatasi raisining 2022 yil
              ...
            </h3>
            <button className="download">
              <i class="fa fa-download" aria-hidden="true"></i>{" "}
              <span>Yuklab olish</span>
            </button>
            <p>
              <span>18:00</span> <span>05 noyabr</span>
            </p>
          </div>
          <div className="img">
            <img src={medic} />
          </div>
        </div>
        <div className="col">
          <div className="desc">
            <h3>
              Sog’liqni saqlash vazirligi tasarrufidagi tibbiyot oliy ta’lim
              muassasalari ...
            </h3>
            <button className="download">
              <i class="fa fa-download" aria-hidden="true"></i>{" "}
              <span>Yuklab olish</span>
            </button>
            <p>
              <span>18:00</span> <span>05 noyabr</span>
            </p>
          </div>
          <div className="img">
            <img src={medic} />
          </div>
        </div>
        <div className="next">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
        <div className="back">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default SSBmeyoriyHujjat;
