import React from "react";
import { Link } from "react-router-dom";
// scss
import "./login.scss";

function Login() {
  return (
    <div className="loginContent">
      <div className="loginModal">
        <div className="closeBlok">
          <i class="fa fa-times closeBtn" aria-hidden="true"></i>
        </div>
        <h1>Tizimga kirish</h1>
        <form>
          <input className="username" type="text" placeholder="Username" />
          <input className="email" type="email" placeholder="Email" />
          <input className="password" type="password" placeholder="Parol" />
          <div className="parolniTiklash">
            <Link>Parolni tiklash</Link>
          </div>
          <div className="loginBtn">
            <button>Kirish</button>
          </div>
        </form>
        <Link className="loginToRoyxatdanOtish">Ro'yxatdan o'tish</Link>
      </div>
    </div>
  );
}

export default Login;
