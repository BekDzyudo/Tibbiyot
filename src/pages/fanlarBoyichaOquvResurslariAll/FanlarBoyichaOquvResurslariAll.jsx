import React from "react";
import photo from "../../assets/images/Photo.png";
import "./fanlarBoyichaOquvResurslariAll.scss";
function FanlarBoyichaOquvResurslariAll() {
  return (
    <div className="fanlarBoyichaOquResurslarAll container">
      <h1 className="title">FANLAR BO’YICHA O’QUV RESURSLAR</h1>
      <div className="content">
        <div className="sidebarFan">
          <form>
            <input type="search" placeholder="Nomi bilan qidirish..." />
          </form>
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
