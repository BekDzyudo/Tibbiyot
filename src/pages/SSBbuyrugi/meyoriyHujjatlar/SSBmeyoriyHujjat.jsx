import React from "react";
import "./SSBmeyoriyHujjat.scss";
import usePagenation from "../../../components/pagenation/usePagenation";

function SSBmeyoriyHujjat() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const { pagenation, currentItems } = usePagenation(url, 3);
  return (
    <div className="SSBMeyoriyHujjatlar container">
      <div className="row">
        <h1>Faoliyatga oid me’yoriy hujjatlar</h1>
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

export default SSBmeyoriyHujjat;
