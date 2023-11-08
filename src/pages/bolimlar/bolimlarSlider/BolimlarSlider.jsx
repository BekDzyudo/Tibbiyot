import React from "react";
// images
import person from "../../../assets/images/person.png";
// scss
import "./bolimlarSlider.scss";

function BolimlarSlider() {
  return (
    <div className="bolimlarSlider container">
      <h1 className="title">BO’LIMLAR</h1>
      <div className="row">
        <div className="cardss">
          <div className="image">
            <img src={person} />
          </div>
          <p>САНИТАРИЯ-ЭПИДЕМИОЛОГИЯ ХИЗМАТИНИ МУВОФИҚЛАШТИРИШ БЎЛИМИ</p>
          <h4>Анварова Латофат Усмоновна</h4>
        </div>
        <div className="cardss">
          <div className="image">
            <img src={person} />
          </div>
          <p>САНИТАРИЯ-ЭПИДЕМИОЛОГИЯ ХИЗМАТИНИ МУВОФИҚЛАШТИРИШ БЎЛИМИ</p>
          <h4>Анварова Латофат Усмоновна</h4>
        </div>
        <div className="cardss">
          <div className="image">
            <img src={person} />
          </div>
          <p>САНИТАРИЯ-ЭПИДЕМИОЛОГИЯ ХИЗМАТИНИ МУВОФИҚЛАШТИРИШ БЎЛИМИ</p>
          <h4>Анварова Латофат Усмоновна</h4>
        </div>
        <div className="cardss">
          <div className="image">
            <img src={person} />
          </div>
          <p>САНИТАРИЯ-ЭПИДЕМИОЛОГИЯ ХИЗМАТИНИ МУВОФИҚЛАШТИРИШ БЎЛИМИ</p>
          <h4>Анварова Латофат Усмоновна</h4>
        </div>
      </div>
    </div>
  );
}

export default BolimlarSlider;
