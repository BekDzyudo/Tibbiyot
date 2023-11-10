import React from "react";
// images
import person from "../../../assets/images/person.png";
// scss
import "./bolimlarSlider.scss";
import usePagenation from "../../../components/pagenation/usePagenation";

function BolimlarSlider() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { pagenation, currentItems } = usePagenation(url, 4);
  return (
    <div className="bolimlarSlider container">
      <div className="row">
        <h1 className="title">BO’LIMLAR</h1>
        {currentItems.map((item) => {
          return (
            <div key={item.id} className="cardss">
              <div className="image">
                <img src={person} />
              </div>
              <p>{item.email}</p>
              <h4>
                {item.name}
                {item.username}
              </h4>
            </div>
          );
        })}
      </div>
      {pagenation}
    </div>
  );
}

export default BolimlarSlider;
