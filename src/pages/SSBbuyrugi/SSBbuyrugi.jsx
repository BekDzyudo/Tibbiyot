import React, { useState } from "react";
// scss
import "./ssbBuyruq.scss";
// components
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import { useGetFetch } from "../../hooks/useGetFetch";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";

function SSBbuyrugi() {
  const month = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const [page, setPage] = useState(1);
  function handlePagination(e, p) {
    setPage(p);
  }
  const url = `http://192.168.101.222:8000/ssb_buyruq`;
  const { data, isPending, error } = useGetFetch(url);
  if (!data) {
    return <p></p>;
  }
  return (
    <div className="ssb container">
      <div className="content">
        <div className="desc">
          <div className="row">
            <h1 className="title">SSB buyrug’i</h1>
            {isPending && <Loader />}
            {error && <h2>{error}</h2>}
            {data.map((ssb) => {
              return (
                <div key={ssb.id} className="cardss">
                  <h3>{ssb.title}</h3>
                  <Link className="download">
                    <i className="fa fa-download" aria-hidden="true"></i>{" "}
                    <span>Yuklab olish</span>
                  </Link>
                  <p>
                    <span>
                      {new Date(ssb.created_at).getHours() < 10
                        ? "0" + new Date(ssb.created_at).getHours()
                        : new Date(ssb.created_at).getHours()}
                      :
                      {new Date(ssb.created_at).getMinutes() < 10
                        ? "0" + new Date(ssb.created_at).getMinutes()
                        : new Date(ssb.created_at).getMinutes()}
                      :
                      {new Date(ssb.created_at).getSeconds() < 10
                        ? "0" + new Date(ssb.created_at).getSeconds()
                        : new Date(ssb.created_at).getSeconds()}
                    </span>{" "}
                    <span>
                      {new Date(ssb.created_at).getDate() < 10
                        ? "0" + new Date(ssb.created_at).getDate()
                        : new Date(ssb.created_at).getDate()}{" "}
                      {month[new Date(ssb.created_at).getMonth()]}
                    </span>
                  </p>
                </div>
              );
            })}
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
    </div>
  );
}

export default SSBbuyrugi;
