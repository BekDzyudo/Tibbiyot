import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// images
import logo from "../../assets/icons/logo.svg";
import login from "../../assets/icons/Login.svg";
import nurse from "../../assets/images/nurse.png";
import phone from "../../assets/icons/phone.svg";
import gmail from "../../assets/icons/gmail.svg";

// sass
import "./header.scss";

function Header() {
  const { i18n, t } = useTranslation();
  function onLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <header>
      <div className="topNavbar">
        <div className="topLeftRightNavbarMenu container">
          <ul className="topLeftNavbarMenu">
            <li>
              <NavLink to="/">{t("home")}</NavLink>
            </li>
            <li>
              <NavLink>{t("courses")}</NavLink>
            </li>
            <li>
              <NavLink>{t("services")}</NavLink>
            </li>
            <li>
              <NavLink to="/Umumiy-malumot">{t("about")}</NavLink>
            </li>
            <li>
              <NavLink to="/OTM-yangiliklari">{t("news")}</NavLink>
            </li>
            <li>
              <NavLink>{t("contact")}</NavLink>
            </li>
          </ul>
          <ul className="topRightNavbarMenu">
            <form>
              <select onChange={onLanguage}>
                <option value="uz">O'zbekcha</option>
                <option value="ru">Ruscha</option>
                <option value="en">Inglizcha</option>
              </select>
            </form>
          </ul>
        </div>
      </div>
      <div className="bottomNavbar container">
        <Link className="logo">
          <div className="logoBlok">
            <img src={logo} alt="Logo" />
          </div>
          <p>
            Tibbiy ta’limda o‘quv <br /> resurslarini yaratish va <br />
            rivojlantirish markazi
          </p>
        </Link>
        <div className="centerBottomNavbar">
          <ul className="callNavbar">
            <li>
              <img src={gmail} />
              <p>tibbiy ta’lim@gmail.com</p>
            </li>
            <li>
              <img src={phone} />
              <p>+ 000 12 345-67-89</p>
            </li>
            <li>
              <img src={phone} /> <p>1003</p>
            </li>
            <li className="login">
              <img src={login} alt="Kirish" /> <p>Kirish</p>
            </li>
          </ul>
          <ul className="dropdownNavbar">
            <li className="liDropLink1">
              <NavLink className="dropLink">
                <p>MARKAZ HAQIDA</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink to="/Umumiy-malumot">Umumiy ma’lumot</NavLink>
                </li>
                <li>
                  <NavLink to="/Faoliyatga-oid-meyoriy-hujjatlar">
                    Faoliyatga oid me’yoriy hujjatlar
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/SSB-buyrugi">SSB buyrug‘i</NavLink>
                </li>
                <li>
                  <NavLink to="/Nizom">Nizom</NavLink>
                </li>
                <li>
                  <NavLink to="/Markaz-ustavi">Markaz ustavi</NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink2">
              <NavLink className="dropLink">
                <p>MARKAZ TUZILMASI</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink to="/Rahbariyat">Rahbariyat</NavLink>
                </li>
                <li>
                  <NavLink to="/Bo'limlar">Bo’limlar</NavLink>
                </li>
                <li>
                  <NavLink to="/Tarkibiy-tuzilma">Tarkibiy tuzilma</NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink3">
              <NavLink className="dropLink">
                <p>FAOLIYAT</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink to="/OTM-bilan-hamkorlik">
                    ОТМлар билан ҳамкорлик{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Xalqaro-hamkorlik">Халқаро ҳамкорлик</NavLink>
                </li>
                <li>
                  <NavLink to="/Markaz-Moliyaviy-Faoliyati">
                    Марказнинг молиявий фаолияти
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink4">
              <NavLink className="dropLink">
                <p>YANGILIKLAR</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink to="/OTM-yangiliklari">
                    Oliy ta’limga oid yangiliklar{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Yangi-adabiyotlar">
                    OTMlar faoliyatiga oid yangi adabiyotlar
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink5">
              <NavLink className="dropLink">
                <p>FANLAR BO‘YICHA O‘QUV RESURSLAR</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="headerImg">
        <img src={nurse} />
      </div>
    </header>
  );
}

export default Header;
