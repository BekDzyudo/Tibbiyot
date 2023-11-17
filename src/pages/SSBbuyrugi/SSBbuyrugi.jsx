import React from "react";
// scss
import "./ssbBuyruq.scss";
// components
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";

function SSBbuyrugi() {
  return (
    <div className="ssb container">
      <div className="content">
        <div className="desc">
          <div className="row">
            <h1 className="title">SSB buyrug’i</h1>

            <div className="cardss">
              <h3>Title</h3>
              <button className="download">
                <i className="fa fa-download" aria-hidden="true"></i>{" "}
                <span>Yuklab olish</span>
              </button>
              <p>
                <span>18:00</span> <span>05 noyabr</span>
              </p>
            </div>
            <div className="cardss">
              <h3>Title</h3>
              <button className="download">
                <i className="fa fa-download" aria-hidden="true"></i>{" "}
                <span>Yuklab olish</span>
              </button>
              <p>
                <span>18:00</span> <span>05 noyabr</span>
              </p>
            </div>
            <div className="cardss">
              <h3>Title</h3>
              <button className="download">
                <i className="fa fa-download" aria-hidden="true"></i>{" "}
                <span>Yuklab olish</span>
              </button>
              <p>
                <span>18:00</span> <span>05 noyabr</span>
              </p>
            </div>
            <div className="cardss">
              <h3>Title</h3>
              <button className="download">
                <i className="fa fa-download" aria-hidden="true"></i>{" "}
                <span>Yuklab olish</span>
              </button>
              <p>
                <span>18:00</span> <span>05 noyabr</span>
              </p>
            </div>
          </div>
          <>
            <hr style={{ marginBottom: "20px", marginTop: "40px" }} />
          </>
        </div>
        <div className="layout">
          <SidebarTwo />
          <OqXalat />
          <SmallContact />
        </div>
      </div>
      <hr style={{ marginBottom: "60px", marginTop: "50px" }} />
    </div>
  );
}

export default SSBbuyrugi;
