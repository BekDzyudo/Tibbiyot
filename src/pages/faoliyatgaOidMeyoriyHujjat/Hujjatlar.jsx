import React from "react";
// image
import image from "../../assets/images/faoliyatImg.png";
import kalendar from "../../assets/icons/kalendar.svg";
//  component
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import usePagenation from "../../components/pagenation/usePagenation";

function Hujjatlar() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { pagenation, currentItems } = usePagenation(url,4);
  return (
    <div className="hujjat">
      <div className="desc">
        <div className="row">
          <h1 className="title">FAOLIYATGA OID ME’YORIY HUJJATLAR</h1>
          {currentItems.map((hujjat) => {
            return (
              <div key={hujjat.id} className="cards">
                <div className="imgBlok">
                  <img src={image} />
                </div>
                <div className="calendar">
                  <img src={kalendar} />
                  <h1>08</h1>
                  <p>March</p>
                </div>
                <div className="description">
                  <h1>{hujjat.title}</h1>
                  <p>{hujjat.body}</p>
                  <ol>
                    <li>Ilova 1</li>
                    <li>Ilova 1</li>
                    <li>Ilova 1</li>
                    <li>Ilova 1</li>
                    <li>Ilova 1</li>
                  </ol>
                </div>
              </div>
            );
          })}
        </div>
        {pagenation}
      </div>
      <div className="layout">
        <SidebarTwo />
        <OqXalat />
        <SmallContact />
      </div>
    </div>
  );
}

export default Hujjatlar;
