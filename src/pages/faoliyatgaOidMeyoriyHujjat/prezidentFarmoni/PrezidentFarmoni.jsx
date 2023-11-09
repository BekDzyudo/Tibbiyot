import React from "react";
import "./prezidentFarmoni.scss";
import usePagenation from "../../../components/pagenation/usePagenation";

function PrezidentFarmoni() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const { pagenation, currentItems } = usePagenation(url);

  return (
    <div className="prezidentFarmoni container">
      <h1>Prezidentning farmon, qaror va farmoyishlari</h1>
      <div className="row">
        {currentItems.map((hujjat) => {
          return (
            <div key={hujjat.id} className="cardss">
              <div className="desc">
                <h3>{hujjat.title}</h3>
                <button className="download">
                  <i className="fa fa-download" aria-hidden="true"></i>{" "}
                  <span>Yuklab olish</span>
                </button>
                <p>
                  <span>18:00</span> <span>05 noyabr</span>
                </p>
              </div>
              <div className="img">
                <img src={hujjat.url} />
              </div>
            </div>
          );
        })}
      </div>
      {pagenation}
    </div>
  );
}

export default PrezidentFarmoni;
