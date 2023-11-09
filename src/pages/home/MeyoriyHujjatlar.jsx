import React from "react";
import "./home.scss";
import Pagenation from "../../components/pagenation/Pagenation";
import { useState } from "react";
import { useEffect } from "react";

function MeyoriyHujjatlar() {
  const [hujjats, setHujjats] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setHujjats(data));
  }, []);

  return (
    <div className="MeyoriyHujjatlar container">
      <h1>Faoliyatga oid me’yoriy hujjatlar</h1>
      <div className="row">
        {hujjats.map((hujjat) => {
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
      <Pagenation data={hujjats} />
    </div>
  );
}

export default MeyoriyHujjatlar;
