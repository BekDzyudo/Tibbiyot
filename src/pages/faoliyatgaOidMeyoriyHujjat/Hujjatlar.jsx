import React from "react";
import kalendar from "../../assets/icons/kalendar.svg";
//  component
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import usePagenation from "../../components/pagenation/usePagenation";
import { useGetFetch } from "../../hooks/useGetFetch";

function Hujjatlar() {
  const url = "http://192.168.101.222:8000/meyoriy_hujjat";
  const { data } = useGetFetch(url);
  // const { pagenation, currentItems } = usePagenation(url, 4);
  if (!data) {
    return <p>null</p>;
  }
  return (
    <div className="hujjat">
      <div className="desc">
        <div className="row">
          <h1 className="title">FAOLIYATGA OID ME’YORIY HUJJATLAR</h1>
          {data.results.map((hujjat) => {
            return (
              <div key={hujjat.id} className="cards">
                <div className="imgBlok">
                  <img src={kalendar} />
                </div>
                <div className="calendar">
                  <img src={kalendar} />
                  <h1>08</h1>
                  <p>March</p>
                </div>
                <div className="description">
                  <h1>{hujjat.id}</h1>
                  <p>desc</p>
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
        {/* {pagenation} */}
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
