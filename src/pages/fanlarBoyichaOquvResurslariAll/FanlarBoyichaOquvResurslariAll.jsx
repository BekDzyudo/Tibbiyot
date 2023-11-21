import React, { useState } from "react";
import photo from "../../assets/images/Photo.png";
import "./fanlarBoyichaOquvResurslariAll.scss";
import AccardionOquvQollanma from "./AccardionOquvQollanma";

function FanlarBoyichaOquvResurslariAll() {
  const [questions, setQuestions] = useState([
    { id: 1, title: "title1", desc: "desc1" },
    { id: 2, title: "title2", desc: "desc2" },
    { id: 3, title: "title3", desc: "desc3" },
    { id: 4, title: "title4", desc: "desc4" },
  ]);
  return (
    <div className="fanlarBoyichaOquResurslarAll container">
      <h1 className="title">FANLAR BO’YICHA O’QUV RESURSLAR</h1>
      <div className="content">
        <div className="sidebarFan">
          <form>
            <input type="text" placeholder="Nomi bilan qidirish..." />
          </form>
          <section className="info">
            {questions.map((question) => (
              <AccardionOquvQollanma key={question.id} {...question} />
            ))}
          </section>
        </div>
        <div className="cardsBlok">
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FanlarBoyichaOquvResurslariAll;
