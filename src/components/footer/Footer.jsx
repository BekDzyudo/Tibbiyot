import React from "react";

//sass
import "./footer.scss";

// images
import logo from "../../assets/icons/logo.svg";
import mail from "../../assets/icons/mail.svg";
import inn from "../../assets/icons/in.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerTop">
        <Link className="footerLogo">
          <div className="logoBlok">
            <img src={logo} alt="Logo" />
          </div>
          <p>
            Tibbiy ta’limda o‘quv <br /> resurslarini yaratish va <br />
            rivojlantirish markazi
          </p>
        </Link>
      </div>
      <div className="footerBottom">
        <div className="footerNavbar container">
          <div className="col">
            <Link>
              <img src={mail} />
            </Link>
            <p>
              Email <br />
              <Link>contact@logistics.com</Link>
            </p>
          </div>
          <div className="col">
            <Link to="/">Bosh sahifa</Link>
            <Link>Markaz haqida</Link>
            <Link>Markaz tuzilmasi</Link>
            <Link>Faoliyat</Link>
            <Link>Biz bilan bog‘lanish</Link>
          </div>
          <div className="col">
            <Link>Yangilik va e’lonlar</Link>
            <Link>O‘quv qo‘llanmalar</Link>
            <Link>O‘quv materiallari</Link>
            <Link>Elektron resurslar</Link>
            <Link>Video darslar</Link>
          </div>
          <div className="col">
            <form>
              <input
                className="footerMail"
                type="email"
                placeholder="Elektron pochta: *"
              />
            </form>
            <div className="logoshow">
              <button>
                <Link>Jo’natish</Link>
              </button>
              <Link>
                <img src={inn} />
              </Link>
              <Link>
                <img src={twitter} />
              </Link>
              <Link>
                <img src={facebook} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footerNextBottom">
        <div className="container">
          <p>
            2023. Барча ҳуқуқлар ҳимояланган. Сайтдан олинган барча маълумотлар
            чоп этилганда веб-сайтга ҳавола қилиш мажбурий
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
