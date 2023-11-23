import React from "react";
import "./parolniTiklash.scss";

function ParolniTiklash() {
  return (
    <div className="parolniTiklashContent">
      <div className="parolniTiklashModal">
        <i class="fa fa-times closeBtn" aria-hidden="true"></i>
        <h1>Parolni tiklash</h1>
        <form>
          <input className="password" type="password" placeholder="Parol" />
          <input
            className="passwordQayta"
            type="password"
            placeholder="Parolni takrorlang"
          />
          <div className="parolniTiklashBtn">
            <button>Parolni tiklash</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ParolniTiklash;
