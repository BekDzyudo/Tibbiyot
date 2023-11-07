import React from "react";
// image
import image from "../../assets/images/faoliyatImg.png";
import kalendar from "../../assets/icons/kalendar.svg";
//  component
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import Pagenation from "../../components/pagenation/Pagenation";

function Hujjatlar() {
  return (
    <div className="hujjat">
      <div className="desc">
        <h1 className="title">FAOLIYATGA OID ME’YORIY HUJJATLAR</h1>
        <div className="row">
          <div className="cards">
            <div className="imgBlok">
              <img src={image} />
            </div>
            <div className="calendar">
              <img src={kalendar} />
              <h1>08</h1>
              <p>March</p>
            </div>
            <div className="description">
              <h1>
                Барча ишлаб чиқарувчи ва етказиб берувчи хўжалик юритувчи
                субъектларга
              </h1>
              <p>
                Ўзбекистон Республикаси Президентининг 09 август .2022 йилдаги
                №ПҚ-348-сонли
              </p>
              <ol>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
              </ol>
            </div>
          </div>
          <div className="cards">
            <div className="imgBlok">
              <img src={image} />
            </div>
            <div className="calendar">
              <img src={kalendar} />
              <h1>08</h1>
              <p>March</p>
            </div>
            <div className="description">
              <h1>
                Барча ишлаб чиқарувчи ва етказиб берувчи хўжалик юритувчи
                субъектларга
              </h1>
              <p>
                Ўзбекистон Республикаси Президентининг 09 август .2022 йилдаги
                №ПҚ-348-сонли
              </p>
              <ol>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
              </ol>
            </div>
          </div>
          <div className="cards">
            <div className="imgBlok">
              <img src={image} />
            </div>
            <div className="calendar">
              <img src={kalendar} />
              <h1>08</h1>
              <p>March</p>
            </div>
            <div className="description">
              <h1>
                Барча ишлаб чиқарувчи ва етказиб берувчи хўжалик юритувчи
                субъектларга
              </h1>
              <p>
                Ўзбекистон Республикаси Президентининг 09 август .2022 йилдаги
                №ПҚ-348-сонли
              </p>
              <ol type="disc">
                <li>Ilova 1</li>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
                <li>Ilova 1</li>
              </ol>
            </div>
          </div>
        </div>
        <Pagenation />
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
