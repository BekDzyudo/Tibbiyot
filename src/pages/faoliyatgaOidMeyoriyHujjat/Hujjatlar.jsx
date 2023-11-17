import React, { useState } from "react";
import kalendar from "../../assets/icons/kalendar.svg";
//  component
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import { useGetFetch } from "../../hooks/useGetFetch";
import { Pagination } from "@mui/material";
// ?page=1

function Hujjatlar() {
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }

  const url = `http://192.168.101.222:8000/meyoriy_hujjat?page=${page}`;
  const { data } = useGetFetch(url);

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
        <Pagination
          count={data.total_pages}
          color="primary"
          onChange={handlePagination}
        ></Pagination>
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
