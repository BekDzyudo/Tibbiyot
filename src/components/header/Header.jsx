import React from "react";
import { Link, NavLink } from "react-router-dom";

// images
import logo from "../../assets/icons/logo.svg";
import login from "../../assets/icons/Login.svg";
import nurse from "../../assets/images/nurse.png";
import phone from "../../assets/icons/phone.svg";
import gmail from "../../assets/icons/gmail.svg";

// sass
import "./header.scss";

function Header() {
  return (
    <header>
      <div className="topNavbar">
        <div className="topLeftRightNavbarMenu container">
          <ul className="topLeftNavbarMenu">
            <li>
              <NavLink to="/">Bosh sahifa</NavLink>
            </li>
            <li>
              <NavLink>Kurslar</NavLink>
            </li>
            <li>
              <NavLink>Xizmatlar</NavLink>
            </li>
            <li>
              <NavLink>Biz haqimizda</NavLink>
            </li>
            <li>
              <NavLink>Yangiliklar va e’lonlar</NavLink>
            </li>
            <li>
              <NavLink>Biz bilan bog‘lanish</NavLink>
            </li>
          </ul>
          <ul className="topRightNavbarMenu">
            <form>
              <select>
                <option value="uz">O'zbekcha</option>
                <option value="ru">Ruscha</option>
                <option value="en">Inglizcha</option>
              </select>
            </form>
            {/* <li>
              <NavLink>O'zbekcha</NavLink>
            </li> */}
            <li>
              <NavLink>Maxsus imkoniyatlar</NavLink>
            </li>
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
              <NavLink>
                <img src={gmail} />
                <p>tibbiy ta’lim@gmail.com</p>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={phone} />
                <p>+ 000 12 345-67-89</p>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={phone} /> <p>1003</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="login">
                <img src={login} alt="Kirish" /> Kirish
              </NavLink>
            </li>
          </ul>
          <ul className="dropdownNavbar">
            <li className="liDropLink1">
              <NavLink className="dropLink">
                <p>MARKAZ HAQIDA</p>{" "}
                <i class="fa fa-angle-down" aria-hidden="true"></i>
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
                  <NavLink>Markaz ustavi</NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink2">
              <NavLink className="dropLink">
                <p>MARKAZ TUZILMASI</p>{" "}
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink>Rahbariyat</NavLink>
                </li>
                <li>
                  <NavLink>Bo’limlar</NavLink>
                </li>
                <li>
                  <NavLink>Tarkibiy tuzilma</NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink3">
              <NavLink className="dropLink">
                <p>FAOLIYAT</p>{" "}
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink>ОТМлар билан ҳамкорлик </NavLink>
                </li>
                <li>
                  <NavLink>Халқаро ҳамкорлик</NavLink>
                </li>
                <li>
                  <NavLink>Марказнинг молиявий фаолияти</NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink4">
              <NavLink className="dropLink">
                <p>YANGILIKLAR</p>{" "}
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink>ОТМлар билан ҳамкорлик </NavLink>
                </li>
                <li>
                  <NavLink>Халқаро ҳамкорлик</NavLink>
                </li>
                <li>
                  <NavLink>Марказнинг молиявий фаолияти</NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink5">
              <NavLink className="dropLink">
                <p>FANLAR BO‘YICHA O‘QUV RESURSLAR</p>{" "}
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink>ОТМлар билан ҳамкорлик </NavLink>
                </li>
                <li>
                  <NavLink>Халқаро ҳамкорлик</NavLink>
                </li>
                <li>
                  <NavLink>Марказнинг молиявий фаолияти</NavLink>
                </li>
              </ul>
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
