import React from "react";
// scss
import "./ssbBuyruq.scss";
// components
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import SSBmeyoriyHujjat from "./meyoriyHujjatlar/SSBmeyoriyHujjat";
import usePagenation from "../../components/pagenation/usePagenation";

function SSBbuyrugi() {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const { pagenation, currentItems } = usePagenation(url, 12);

  return (
    <div className="ssb container">
      <div className="content">
        <div className="desc">
          <div className="row">
            <h1 className="title">SSB buyrug’i</h1>
            {currentItems.map((hujjat) => {
              return (
                <div key={hujjat.id} className="cardss">
                  <h3>{hujjat.name}</h3>
                  <button className="download">
                    <i className="fa fa-download" aria-hidden="true"></i>{" "}
                    <span>Yuklab olish</span>
                  </button>
                  <p>
                    <span>18:00</span> <span>05z noyabr</span>
                  </p>
                </div>
              );
            })}
          </div>
          <>
            <hr style={{ marginBottom: "20px", marginTop: "40px" }} />
            {pagenation}
          </>
        </div>
        <div className="layout">
          <SidebarTwo />
          <OqXalat />
          <SmallContact />
        </div>
      </div>
      <hr style={{ marginBottom: "60px", marginTop: "50px" }} />
      <SSBmeyoriyHujjat />
    </div>
  );
}

export default SSBbuyrugi;
