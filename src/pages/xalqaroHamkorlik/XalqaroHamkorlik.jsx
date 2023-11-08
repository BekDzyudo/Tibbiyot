import React from "react";
// scss
import "./xalqaroHamkorlik.scss";
// image
import logoType from "../../assets/icons/otmIcon.svg";
// components
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";

function XalqaroHamkorlik() {
  return (
    <div className="xalqaro container">
      <div className="desc">
        <h1 className="title">XALQARO HAMKORLIK</h1>
        <table className="xalqaroTable">
          <tr className="thead">
            <td>N</td>
            <td>Tashkilot nomi</td>
            <td>Faoliyati</td>
            <td>Logotype</td>
          </tr>
          <tr className="tbody">
            <td>1</td>
            <td>UNESCO</td>
            <td>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium unde at consectetur voluptate nostrum iste obcaecati
              fugiat perspiciatis. Nulla, magnam? Mollitia incidunt nesciunt non
              delectus aliquam at sed, obcaecati reiciendis?
            </td>
            <td>
              <img src={logoType} />
            </td>
          </tr>
          <tr className="tbody">
            <td>1</td>
            <td>UNESCO</td>
            <td>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium unde at consectetur voluptate nostrum iste obcaecati
              fugiat perspiciatis. Nulla, magnam? Mollitia incidunt nesciunt non
              delectus aliquam at sed, obcaecati reiciendis?
            </td>
            <td>
              <img src={logoType} />
            </td>
          </tr>
          <tr className="tbody">
            <td>1</td>
            <td>UNESCO</td>
            <td>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium unde at consectetur voluptate nostrum iste obcaecati
              fugiat perspiciatis. Nulla, magnam? Mollitia incidunt nesciunt non
              delectus aliquam at sed, obcaecati reiciendis?
            </td>
            <td>
              <img src={logoType} />
            </td>
          </tr>
          <tr className="tbody">
            <td>1</td>
            <td>UNESCO</td>
            <td>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium unde at consectetur voluptate nostrum iste obcaecati
              fugiat perspiciatis. Nulla, magnam? Mollitia incidunt nesciunt non
              delectus aliquam at sed, obcaecati reiciendis?
            </td>
            <td>
              <img src={logoType} />
            </td>
          </tr>
        </table>
      </div>
      <div className="layout">
        <SidebarTwo />
        <OqXalat />
        <SmallContact />
      </div>
    </div>
  );
}

export default XalqaroHamkorlik;
