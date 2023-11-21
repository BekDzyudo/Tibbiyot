import React from "react";
import { useState } from "react";
// <i class="fa fa-plus" aria-hidden="true"></i>
// <i class="fa fa-minus" aria-hidden="true"></i>

function AccardionOquvQollanma({ title, desc }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <i class="fa fa-minus" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-plus" aria-hidden="true"></i>
          )}
        </button>
      </header>
      {showInfo && desc}
    </article>
  );
}

export default AccardionOquvQollanma;
