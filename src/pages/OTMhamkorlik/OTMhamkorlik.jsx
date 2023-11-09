import React from "react";
// images
import otmIcon from "../../assets/icons/otmIcon.svg";
import otm from "../../assets/images/otm.png";
// scss
import "./OTMhamkorlik.scss";
// components
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";

function OTMhamkorlik() {
  return (
    <div className="OTM container">
      <div className="desc">
        <section className="OTMBilanHamkorlik">
          <h1 className="title">OTMlar bilan hamkorlik</h1>
          <div className="imgBlok">
            <img src={otm} />
          </div>
        </section>
        <section className="bizHaqimizda">
          <h1>
            <img src={otmIcon} />
            Biz haqimizda
          </h1>
          <p>
            “Тиббий-генетик, молекуляр-ҳужайра, фармако-токсикологик ва биологик
            тадқиқотлар” олий таълим муассасалариаро илмий-тадқиқотлабораторияси
            (бундан буён матнда ОТМИТЛга қисқартирилган) : Ўзбекистон
            Республикаси Президентининг 2011 йил 20 майдаги “Олий таълим
            муассасаларининг моддий-техник базасини мустаҳкамлаш ва юқори
            малакали мутахассисларни тайёрлаш сифатини яхшилаш чора-тадбирлари
            тўғрисида” ги ПҚ-1533-сонли қарори. Ўзбекистон Республикаси
            Президентининг 2017 йил 20 апрелдаги “Олий таълим тизимини янада
            ривожлантириш чора-тадбирлари тўғрисида” ги ПҚ-2909-сонли қарори.
            Ўзбекистон Республикаси Президентининг 2017 йил 22 мартдаги Ҳалқаро
            ривожланиш ассоциацияси иштирокидаги “Олий таълим муассасаларининг
            моддий-техник базасини мустақкамлаш лойиҳасини амалга ошириш
            чоралари тўғрисида”ги ПҚ-2848-сонли қарори. ОТМИТЛ ходимларининг
            концепцияси, низоми ва вазифалари қайта ишланган ва 2014 йил 27
            февралда тасдиқланган.
          </p>
        </section>
        <section className="otmAccardion">
          <h1>
            <img src={otmIcon} />
            OTMlar bilan hamkorlik
          </h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  OTM
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <ol className="accordion-body">
                  <li>Toshkent tibbiyot akademiyasi</li>
                  <li>Toshkent pediatriya tibbiyot instituti</li>
                </ol>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  PROFESSIONAL TALIM MUASSASALARI
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <ol className="accordion-body">
                  <li>Toshkent tibbiyot akademiyasi</li>
                  <li>Toshkent pediatriya tibbiyot instituti</li>
                </ol>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  TIBBIY HODIMLARNING KASBIY MALAKASINI RIVOJLANTIRISH MARKAZI
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <ol className="accordion-body">
                  <li>Toshkent tibbiyot akademiyasi</li>
                  <li>Toshkent pediatriya tibbiyot instituti</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="layout">
        <SidebarTwo />
        <OqXalat />
        <SmallContact />
      </div>
    </div>
  );
}

export default OTMhamkorlik;
