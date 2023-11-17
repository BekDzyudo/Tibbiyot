import React, { useState } from "react";
//  component
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import { useGetFetch } from "../../hooks/useGetFetch";
import { Pagination } from "@mui/material";

function Hujjatlar() {
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }
  const url = `http://192.168.101.222:8000/meyoriy_hujjat?page=${page}`;
  const { data } = useGetFetch(url);

  if (!data) {
    return <p></p>;
  }
  return (
    <div className="hujjat">
      <div className="desc">
        <div className="row">
          <h1 className="title">FAOLIYATGA OID ME’YORIY HUJJATLAR</h1>
          {data.results.map((hujjat) => {
            return (
              <div className="cardss" key={hujjat.id}>
                <h3>{hujjat.id}</h3>
                <button className="download">
                  <i className="fa fa-download" aria-hidden="true"></i>{" "}
                  <span>Yuklab olish</span>
                </button>
                <p>
                  <span>18:00</span> <span>05 noyabr</span>
                </p>
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
