import React from "react";
// scss
import "./otmYangiliklar.scss";
// images
import prezident from "../../assets/images/Video_bg.png";
import koz from "../../assets/icons/kozIcon.svg";
// components
import Pagenation from "../../components/pagenation/Pagenation";
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import usePagenation from "../../components/pagenation/usePagenation";

function OTMyangiliklar() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { pagenation, currentItems } = usePagenation(url, 10);
  return (
    <div className="OTMyangiliklar container">
      <div className="content">
        <div className="desc">
          <div className="row">
            <h1 className="title">OLIY TA’LIMGA OID YANGILIKLAR</h1>
            {currentItems.map((news) => {
              return (
                <div className="cardss">
                  <div className="img">
                    <img src={prezident} />
                  </div>
                  <div className="desc">
                    <h3>{news.title}</h3>
                    <p>
                      <span>18:00</span> <span>05 noyabr</span>
                      <span>
                        <span>
                          <img src={koz} /> <span>9124</span>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <hr style={{ marginBottom: "40px" }} />
          {pagenation}
        </div>
        <div className="layout">
          <SidebarTwo />
          <OqXalat />
          <SmallContact />
        </div>
      </div>
    </div>
  );
}

export default OTMyangiliklar;
