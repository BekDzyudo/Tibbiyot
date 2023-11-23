import React from "react";
import "./royxatdanOtish.scss";

function RoyxatdanOtish() {
  return (
    <div className="royxatdanOtishContent">
      <div className="royxatdanOtishModal">
        <i
          class="fa fa-times closeBtn"
          aria-hidden="true"
          onClick={() => setShow(false)}
        ></i>
        <h1>Ro‘yxatdan o‘tish</h1>
        <form>
          <input className="username" type="text" placeholder="Username" />
          <input className="email" type="email" placeholder="Email" />
          <input className="password" type="password" placeholder="Parol" />
          <input
            className="passwordQayta"
            type="password"
            placeholder="Parolni takrorlang"
          />
          <div className="royxatdanOtishBtn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RoyxatdanOtish;
