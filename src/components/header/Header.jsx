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
              <NavLink to="/Umumiy-malumot">Biz haqimizda</NavLink>
            </li>
            <li>
              <NavLink to="/OTM-yangiliklari">Yangiliklar va e’lonlar</NavLink>
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
              <NavLink to="/Umumiy-malumot" className="dropLink">
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
                  <NavLink to="/Markaz-ustavi">Markaz ustavi</NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink2">
              <NavLink to="/Rahbariyat" className="dropLink">
                <p>MARKAZ TUZILMASI</p>{" "}
                <i class="fa fa-angle-down" aria-hidden="true"></i>
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
              <NavLink to="/OTM-bilan-hamkorlik" className="dropLink">
                <p>FAOLIYAT</p>{" "}
                <i class="fa fa-angle-down" aria-hidden="true"></i>
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
              <NavLink to="/OTM-yangiliklari" className="dropLink">
                <p>YANGILIKLAR</p>{" "}
                <i class="fa fa-angle-down" aria-hidden="true"></i>
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
                <i class="fa fa-angle-down" aria-hidden="true"></i>
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
