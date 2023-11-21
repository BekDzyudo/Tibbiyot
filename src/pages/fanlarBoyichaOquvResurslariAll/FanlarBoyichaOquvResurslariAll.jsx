import React, { useState } from "react";
import photo from "../../assets/images/Photo.png";
import "./fanlarBoyichaOquvResurslariAll.scss";
// image
import book from "../../assets/icons/fa_book.svg"

function FanlarBoyichaOquvResurslariAll() {
  const [questions, setQuestions] = useState([
    { id: 1, title: "title1", desc: "desc1" },
    { id: 2, title: "title2", desc: "desc2" },
    { id: 3, title: "title3", desc: "desc3" },
    { id: 4, title: "title4", desc: "desc4" },
  ]);
  const [showInfo, setShowInfo] = useState(false);
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
               <article className="question">
               <header>
                 <h4>{question.title} <span className="count">
                     <img src={book} />
                     <p></p>
                     </span></h4>
                 <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                   {showInfo ? (
                     <i class="fa fa-minus" aria-hidden="true"></i>
                   ) : (
                     <i class="fa fa-plus" aria-hidden="true"></i>
                   )}
                 </button>
               </header>
               {showInfo && question.desc}
             </article>
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
