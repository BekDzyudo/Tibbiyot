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
              <NavLink to="/">{t("home_page.top_navbar.home")}</NavLink>
            </li>
            <li>
              <NavLink>{t("home_page.top_navbar.about")}</NavLink>
            </li>
            <li>
              <NavLink>{t("home_page.top_navbar.courses")}</NavLink>
            </li>
            <li>
              <NavLink to="/Umumiy-malumot">
                {t("home_page.top_navbar.services")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/OTM-yangiliklari">
                {t("home_page.top_navbar.news")}
              </NavLink>
            </li>
            <li>
              <NavLink>{t("home_page.top_navbar.contact")}</NavLink>
            </li>
          </ul>
          <ul className="topRightNavbarMenu">
            <form>
              <select onChange={onLanguage}>
                <option value="uz">O'zbekcha</option>
                <option value="ru">Русский</option>
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
              <p>(71) 268-13-11</p>
            </li>
            <li>
              <img src={phone} /> <p>1003</p>
            </li>
            <li className="login">
              <img src={login} alt="Kirish" />{" "}
              <p>{t("home_page.top_navbar.login")}</p>
            </li>
          </ul>
          <ul className="dropdownNavbar">
            <li className="liDropLink1">
              <NavLink className="dropLink">
                <p>{t("home_page.dropdownNavbar.markaz_haqida")}</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink to="/Umumiy-malumot">
                    {t("home_page.dropdownNavbar.umumiy_malumot")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Faoliyatga-oid-meyoriy-hujjatlar">
                    {t(
                      "home_page.dropdownNavbar.faoliyatgaOidMeyoriyHujjatlar"
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/SSB-buyrugi">
                    {" "}
                    {t("home_page.dropdownNavbar.SSBBuyrugi")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink2">
              <NavLink className="dropLink">
                <p>{t("home_page.dropdownNavbar.markaz_tuzilmasi")}</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink to="/Rahbariyat-va-hodimlar">
                    {t("home_page.dropdownNavbar.rahbariyat_hodimlar")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Bo'limlar">
                    {t("home_page.dropdownNavbar.bolimlar")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Tarkibiy-tuzilma">
                    {t("home_page.dropdownNavbar.tarkibiy_tuzilma")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink3">
              <NavLink className="dropLink">
                <p>{t("home_page.dropdownNavbar.faoliyat")}</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink to="/OTM-bilan-hamkorlik">
                    {t("home_page.dropdownNavbar.OTMxamkorlik")}{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Xalqaro-hamkorlik">
                    {t("home_page.dropdownNavbar.xalqaroXamkorlik")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Jamoat-salomatligi-texnikumlari-bilan-hamkorlik">
                    {t("home_page.dropdownNavbar.jamoatSalomatligi")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Kasbiy-malaka-oshirish-va-Ilmiy-amaliy-markazlar-bilan-hamkorlik">
                    {t("home_page.dropdownNavbar.kasbiyIlmiyHamkorlik")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Yangi-adabiyotlar">
                    {t("home_page.dropdownNavbar.yangi_adabiyotlar")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink4">
              <NavLink className="dropLink">
                <p>{t("home_page.dropdownNavbar.yangiliklar")}</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner"></ul>
            </li>
            <li className="liDropLink5">
              <NavLink className="dropLink">
                <p>{t("home_page.dropdownNavbar.oquv_resurslar")}</p>
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
