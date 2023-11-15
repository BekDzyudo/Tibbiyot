import React, { useEffect } from "react";
//
import "./nizom.scss";
//
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import QoshimchaNizom from "./qoshimchaNizom.jsx/QoshimchaNizom";

function Nizom() {
  return (
    <div className="nizom container">
      <div className="content">
        <div className="desc">
          <h1 className="title">NIZOM</h1>
          <div className="downloadBtn">
            <button className="download">
              <i className="fa fa-download" aria-hidden="true"></i>{" "}
              <span>Yuklab olish</span>
            </button>
          </div>
          <p>
            1-боб. Умумий қоидалар 2-боб. Харажатлар сметаси ва штат
            жадвалларини тузиш ва тасдиқлаш 3-боб. Вақтинчалик харажатлар
            сметаларини тузиш ва тасдиқлаш 4-боб. Бюджет ташкилотларининг
            бюджетдан ташқари жамғармалари бўйича даромадлар ва харажатлар
            сметаларини тузиш ва тасдиқлаш 5-боб. Бюджет маблағларини
            тақсимловчилар томонидан уларнинг бўйсунувидаги бюджет ташкилотлари
            ва бюджет маблағлари олувчиларнинг харажатлар сметалари, даромадлар
            ва харажатлар сметалари ҳамда штат жадвалларини рўйхатдан ўтказиш
            6-боб. Ўзбекистон Республикаси Молия вазирлиги ҳамда ҳудудий молия
            органларида бюджет ташкилотлари ҳамда бюджет маблағлари
            олувчиларнинг харажатлар сметасини, даромадлар ва харажатлар
            сметасини ва штат жадвалларини, шунингдек бюджет маблағларини
            тақсимловчиларнинг жамланма харажатлар сметаси, жамланма даромадлар
            ва харажатлар сметасини ва жамланма штат жадвалларини рўйхатдан
            ўтказиш 7-боб. Бюджет ташкилотлари ҳамда бюджет маблағлари
            олувчиларнинг харажатлар сметаси, даромадлар ва харажатлар сметаси,
            штат жадвалларига, шунингдек бюджет маблағларини тақсимловчининг
            жамланма харажатлар сметаси, жамланма даромадлар ва харажатлар
            сметаси ҳамда жамланма штат жадвалларига ўзгартиришлар киритиш
            8-боб. Назорат ва жавобгарлик 1-илова. Харажатлар сметаси 1а-илова.
            Харажатлар сметаси 2-илова. Капитал қурилишлар бўйича харажатлар
            сметаси 3-илова. Штат жадвали 4-илова. Вақтинчалик харажатлар
            сметаси 5-илова. Бюджет ташкилотларининг бюджетдан ташқари маблағлар
            бўйича даромадлар ва харажатлар сметаси 6-илова. Рўйхатдан ўтказиш
            карточкаси 7-илова. Бюджет ташкилотлари ва бюджетдан маблағ
            олувчиларнинг рўйхатга олинган (жамланма) харажатлар сметаси,
            даромадлар ва харажатлар сметаси ва штат жадвалларини ҳисобга олиш
            журнали 1-боб. Умумий қоидалар 2-боб. Харажатлар сметаси ва штат
            жадвалларини тузиш ва тасдиқлаш 3-боб. Вақтинчалик харажатлар
            сметаларини тузиш ва тасдиқлаш 4-боб. Бюджет ташкилотларининг
            бюджетдан ташқари жамғармалари бўйича даромадлар ва харажатлар
            сметаларини тузиш ва тасдиқлаш 5-боб. Бюджет маблағларини
            тақсимловчилар томонидан уларнинг бўйсунувидаги бюджет ташкилотлари
            ва бюджет маблағлари олувчиларнинг харажатлар сметалари, даромадлар
            ва харажатлар сметалари ҳамда штат жадвалларини рўйхатдан ўтказиш
            6-боб. Ўзбекистон Республикаси Молия вазирлиги ҳамда ҳудудий молия
            органларида бюджет ташкилотлари ҳамда бюджет маблағлари
            олувчиларнинг харажатлар сметасини, даромадлар ва харажатлар
            сметасини ва штат жадвалларини, шунингдек бюджет маблағларини
            тақсимловчиларнинг жамланма харажатлар сметаси, жамланма даромадлар
            ва харажатлар сметасини ва жамланма штат жадвалларини рўйхатдан
            ўтказиш 7-боб. Бюджет ташкилотлари ҳамда бюджет маблағлари
            олувчиларнинг харажатлар сметаси, даромадлар ва харажатлар сметаси,
            штат жадвалларига, шунингдек бюджет маблағларини тақсимловчининг
            жамланма харажатлар сметаси, жамланма даромадлар ва харажатлар
            сметаси ҳамда жамланма штат жадвалларига ўзгартиришлар киритиш
            8-боб. Назорат ва жавобгарлик 1-илова. Харажатлар сметаси 1а-илова.
            Харажатлар сметаси 2-илова. Капитал қурилишлар бўйича харажатлар
            сметаси 3-илова. Штат жадвали 4-илова. Вақтинчалик харажатлар
            сметаси 5-илова. Бюджет ташкилотларининг бюджетдан ташқари маблағлар
            бўйича даромадлар ва харажатлар сметаси 6-илова. Рўйхатдан ўтказиш
            карточкаси 7-илова. Бюджет ташкилотлари ва бюджетдан маблағ
            олувчиларнинг рўйхатга олинган (жамланма) харажатлар сметаси,
            даромадлар ва харажатлар сметаси ва штат жадвалларини ҳисобга олиш
            журнали
          </p>
        </div>
        <div className="layout">
          <SidebarTwo />
          <OqXalat />
          <SmallContact />
        </div>
      </div>
      <hr style={{ marginBottom: "60px", marginTop: "30px" }} />
      <QoshimchaNizom />
    </div>
  );
}

export default Nizom;
